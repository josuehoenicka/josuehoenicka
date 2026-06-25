import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, inject } from '@angular/core';

// Segment lengths matching the SVG geometry: shoulder (300,370) → elbow (300,232) → wrist (300,124)
const L1 = 138;
const L2 = 108;
const HEAD_LEN = 68; // wrist to claw mouth
const SHOULDER_X = 300;
const SHOULDER_Y = 370;
const VIEW_W = 600;
const VIEW_H = 560;
const CURSOR_IDLE_MS = 3000;
const CATCH_RADIUS = 30;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Shortest signed angular difference a - b, wrapped to [-π, π] — so easing never takes the long way around. */
function angleDiff(a: number, b: number): number {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

@Component({
  selector: 'app-robot-arm',
  templateUrl: './robot-arm.html',
  styleUrl: './robot-arm.scss',
})
export class RobotArm implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);

  private rafId = 0;
  private pointerX = 0;
  private pointerY = 0;
  private hasPointer = false;
  private lastPointerAt = -Infinity;

  private svg: SVGSVGElement | null = null;
  private upper: SVGGElement | null = null;
  private fore: SVGGElement | null = null;
  private head: SVGGElement | null = null;

  private a1 = -0.12;
  private a2 = 0.3;
  private a3 = -0.06;

  // Invisible roaming target the arm drifts toward when no mouse is present.
  private roamX = 200;
  private roamY = 150;
  private roamTX = 200;
  private roamTY = 150;

  private readonly onPointerMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    this.pointerX = event.clientX;
    this.pointerY = event.clientY;
    this.hasPointer = true;
    this.lastPointerAt = performance.now();
  };

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const el = this.host.nativeElement;
    this.svg = el.querySelector('svg');
    this.upper = el.querySelector('[data-arm="upper"]');
    this.fore = el.querySelector('[data-arm="fore"]');
    this.head = el.querySelector('[data-arm="head"]');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.applyPose();
    if (reduceMotion) return;

    this.pickRoamTarget();
    this.roamX = this.roamTX;
    this.roamY = this.roamTY;

    this.zone.runOutsideAngular(() => {
      window.addEventListener('pointermove', this.onPointerMove, { passive: true });
      this.rafId = requestAnimationFrame(now => this.frame(now));
    });
  }

  ngOnDestroy() {
    if (typeof window === 'undefined') return;
    window.removeEventListener('pointermove', this.onPointerMove);
    cancelAnimationFrame(this.rafId);
  }

  private frame(now: number) {
    if (this.svg) {
      const cursorActive = this.hasPointer && now - this.lastPointerAt < CURSOR_IDLE_MS;
      let tx: number;
      let ty: number;

      if (cursorActive) {
        const rect = this.svg.getBoundingClientRect();
        tx = ((this.pointerX - rect.left) / rect.width) * VIEW_W;
        ty = ((this.pointerY - rect.top) / rect.height) * VIEW_H;
      } else {
        // Drift toward an invisible roaming target; pick a new one once the claw reaches it.
        this.roamX += (this.roamTX - this.roamX) * 0.09;
        this.roamY += (this.roamTY - this.roamY) * 0.09;
        const tip = this.tipPosition();
        if (Math.hypot(tip.x - this.roamX, tip.y - this.roamY) < CATCH_RADIUS) {
          this.pickRoamTarget();
        }
        tx = this.roamX;
        ty = this.roamY;
      }

      this.solveIK(tx, ty, cursorActive ? 0.085 : 0.05);
      this.applyPose();
    }
    this.rafId = requestAnimationFrame(next => this.frame(next));
  }

  /** Two-bone analytic IK: shoulder + elbow angles so the wrist reaches toward the target. */
  private solveIK(tx: number, ty: number, smoothing: number) {
    const vx = tx - SHOULDER_X;
    const vy = ty - SHOULDER_Y;
    const d = clamp(Math.hypot(vx, vy), Math.abs(L1 - L2) + 12, L1 + L2 - 6);

    const phi = Math.atan2(vx, -vy); // 0 = straight up, + = toward the right

    const cosAlpha = (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d);
    const alpha = Math.acos(clamp(cosAlpha, -1, 1));
    const cosBeta = (L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2);
    const elbow = Math.PI - Math.acos(clamp(cosBeta, -1, 1));

    // Both elbow configurations reach the target; choose the one closest to the
    // current pose so the forearm eases over instead of snapping when the target
    // crosses the centre line.
    const a = { t1: phi - alpha, t2: elbow };
    const b = { t1: phi + alpha, t2: -elbow };
    const cost = (s: { t1: number; t2: number }) =>
      Math.abs(angleDiff(s.t1, this.a1)) + Math.abs(angleDiff(s.t2, this.a2));
    const sol = cost(a) <= cost(b) ? a : b;

    // Allow a wide cone, including downward, so the arm can dip in front of the name.
    const t1 = clamp(sol.t1, -2.75, 2.75);
    const t2 = sol.t2;

    // Second joint (wrist): aim the claw at the target so it articulates fully.
    const worldFore = t1 + t2;
    const wristX = SHOULDER_X + L1 * Math.sin(t1) + L2 * Math.sin(worldFore);
    const wristY = SHOULDER_Y - L1 * Math.cos(t1) - L2 * Math.cos(worldFore);
    const aim = Math.atan2(tx - wristX, -(ty - wristY));
    const t3 = clamp(angleDiff(aim, worldFore), -2.4, 2.4);

    this.a1 += angleDiff(t1, this.a1) * smoothing;
    this.a2 += angleDiff(t2, this.a2) * smoothing;
    this.a3 += angleDiff(t3, this.a3) * smoothing;
  }

  private applyPose() {
    const deg = (rad: number) => (rad * 180) / Math.PI;
    this.upper?.setAttribute('transform', `rotate(${deg(this.a1)} 300 370)`);
    this.fore?.setAttribute('transform', `rotate(${deg(this.a2)} 300 232)`);
    this.head?.setAttribute('transform', `rotate(${deg(this.a3)} 300 124)`);
  }

  /** Claw mouth position from forward kinematics of the current pose. */
  private tipPosition(): { x: number; y: number } {
    const t1 = this.a1;
    const t2 = t1 + this.a2;
    const t3 = t2 + this.a3;
    return {
      x: SHOULDER_X + L1 * Math.sin(t1) + L2 * Math.sin(t2) + HEAD_LEN * Math.sin(t3),
      y: SHOULDER_Y - L1 * Math.cos(t1) - L2 * Math.cos(t2) - HEAD_LEN * Math.cos(t3),
    };
  }

  /** Random reachable spot. Mostly upper, but every so often swings wide and low to sweep over the name. */
  private pickRoamTarget() {
    for (let i = 0; i < 12; i++) {
      const wide = Math.random() < 0.3;
      const ang = (Math.random() * 2 - 1) * (wide ? 2.6 : 1.5);
      const dist = 150 + Math.random() * 120;
      const x = clamp(SHOULDER_X + dist * Math.sin(ang), 20, VIEW_W - 20);
      const y = clamp(SHOULDER_Y - dist * Math.cos(ang), 30, 540);
      if (Math.hypot(x - this.roamX, y - this.roamY) > 150 || i === 11) {
        this.roamTX = x;
        this.roamTY = y;
        return;
      }
    }
  }
}
