import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { I18nService } from '../../../services/i18n.service';
import {
  WORSHIP_ENTRIES,
  WorshipEntry,
  Instrument,
  DrumHit,
} from '../worship-data';

const DRUM_INSTRUMENTS = ['hihat', 'snare', 'kick'] as const;

const DRUM_ICONS: Record<string, string> = {
  hihat: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><ellipse cx="12" cy="10" rx="10" ry="3"/><line x1="12" y1="13" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>`,
  snare: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><ellipse cx="12" cy="8" rx="10" ry="4"/><line x1="2" y1="8" x2="2" y2="16"/><line x1="22" y1="8" x2="22" y2="16"/><ellipse cx="12" cy="16" rx="10" ry="4"/></svg>`,
  kick: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>`,
};

@Component({
  selector: 'app-worship-song',
  imports: [RouterLink],
  templateUrl: './song.html',
  styleUrl: './song.scss',
})
export class WorshipSongPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly destroyRef = inject(DestroyRef);
  readonly i18n = inject(I18nService);

  readonly entry = signal<WorshipEntry | null>(null);
  readonly selectedInstrument = signal<Instrument>('piano');
  readonly drumsPlaying = signal(false);
  readonly drumStep = signal(-1);

  readonly allInstruments: Instrument[] = ['piano', 'guitar', 'drums'];
  readonly drumInstruments = DRUM_INSTRUMENTS;

  private audioCtx: AudioContext | null = null;
  private drumInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const song = WORSHIP_ENTRIES.find(item => item.slug === slug) ?? null;
    this.entry.set(song);

    const qp = this.route.snapshot.queryParamMap.get('instrument') as Instrument | null;
    if (qp && song?.instruments.includes(qp)) {
      this.selectedInstrument.set(qp);
    } else if (song?.instruments.length) {
      this.selectedInstrument.set(song.instruments[0]);
    }

    this.destroyRef.onDestroy(() => this.stopDrums());
  }

  readonly availableInstruments = computed(() => {
    const song = this.entry();
    return song?.instruments ?? ['piano'];
  });

  readonly drumGrid = computed(() => {
    const song = this.entry();
    if (!song?.drumPattern) return [];

    const pattern = song.drumPattern;
    return DRUM_INSTRUMENTS.map(instrument => {
      const steps: boolean[] = [];
      for (let i = 0; i < pattern.steps; i++) {
        steps.push(pattern.hits.some((h: DrumHit) => h.instrument === instrument && h.step === i));
      }
      return { instrument, steps };
    });
  });

  readonly activeDrums = computed(() => {
    const song = this.entry();
    const step = this.drumStep();
    if (!song?.drumPattern || step < 0) {
      return { hihat: false, snare: false, kick: false };
    }
    const hits = song.drumPattern.hits;
    return {
      hihat: hits.some(h => h.instrument === 'hihat' && h.step === step),
      snare: hits.some(h => h.instrument === 'snare' && h.step === step),
      kick: hits.some(h => h.instrument === 'kick' && h.step === step),
    };
  });

  drumIcon(instrument: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DRUM_ICONS[instrument] ?? '');
  }

  difficultyLabel(level: string): string {
    return this.i18n.t('worship.difficulty.' + level);
  }

  isInstrumentAvailable(instrument: string): boolean {
    return this.entry()?.instruments.includes(instrument as Instrument) ?? false;
  }

  selectInstrument(instrument: string): void {
    if (!this.isInstrumentAvailable(instrument)) return;
    this.stopDrums();
    this.selectedInstrument.set(instrument as Instrument);
  }

  goBack(event: MouseEvent): void {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.router.navigateByUrl('/worship');
  }

  toggleDrums(): void {
    if (this.drumsPlaying()) {
      this.stopDrums();
    } else {
      this.startDrums();
    }
  }

  private getAudioCtx(): AudioContext {
    if (!this.audioCtx) {
      this.audioCtx = new AudioContext();
    }
    return this.audioCtx;
  }

  private playKick(): void {
    const ctx = this.getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  }

  private playSnare(): void {
    const ctx = this.getAudioCtx();
    const duration = 0.15;

    const noise = ctx.createBufferSource();
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1000;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.8, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start(ctx.currentTime);

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 180;
    oscGain.gain.setValueAtTime(0.5, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(oscGain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  }

  private playHihat(): void {
    const ctx = this.getAudioCtx();
    const duration = 0.06;

    const noise = ctx.createBufferSource();
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start(ctx.currentTime);
  }

  private playDrumHit(instrument: string): void {
    switch (instrument) {
      case 'kick': this.playKick(); break;
      case 'snare': this.playSnare(); break;
      case 'hihat': this.playHihat(); break;
    }
  }

  private startDrums(): void {
    const song = this.entry();
    if (!song?.drumPattern) return;

    const pattern = song.drumPattern;
    const stepDuration = (60_000 / song.bpm) / 2;
    let step = 0;

    this.drumsPlaying.set(true);
    this.drumStep.set(0);

    const tick = () => {
      this.drumStep.set(step);

      for (const hit of pattern.hits) {
        if (hit.step === step) {
          this.playDrumHit(hit.instrument);
        }
      }

      step = (step + 1) % pattern.steps;
    };

    tick();
    this.drumInterval = setInterval(tick, stepDuration);
  }

  private stopDrums(): void {
    this.drumsPlaying.set(false);
    this.drumStep.set(-1);
    if (this.drumInterval !== null) {
      clearInterval(this.drumInterval);
      this.drumInterval = null;
    }
  }
}
