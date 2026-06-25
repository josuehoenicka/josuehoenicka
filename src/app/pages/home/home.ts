import { Component, signal, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { RobotArm } from '../../components/robot-arm/robot-arm';

interface CarouselItem {
  name: string;
  image: string;
  url?: string;
}

interface CarouselSection {
  id: string;
  titleKey: string;
  items: CarouselItem[];
  looped: CarouselItem[];
  scrollDuration: number;
}

interface TechIcon {
  name: string;
  src: string;
  x: number;
  y: number;
  size: number;
  floatDuration: number;
  floatDelay: number;
}

const TECH_ICONS = [
  { name: 'JavaScript', file: 'javascript.svg' },
  { name: 'Python', file: 'python.svg' },
  { name: 'C++', file: 'cplusplus.svg' },
  { name: 'React.js', file: 'react.svg' },
  { name: 'Angular', file: 'angular.svg' },
  { name: 'Flutter', file: 'flutter.svg' },
  { name: 'Node.js', file: 'nodedotjs.svg' },
  { name: 'Docker', file: 'docker.svg' },
  { name: 'Redis', file: 'redis.svg' },
  { name: 'MySQL', file: 'mysql.svg' },
  { name: 'PostgreSQL', file: 'postgresql.svg' },
  { name: 'MongoDB', file: 'mongodb.svg' },
  { name: 'Azure', file: 'azure.svg' },
  { name: 'Google Cloud', file: 'googlecloud.svg' },
  { name: 'Firebase', file: 'firebase.svg' },
  { name: 'Linux', file: 'linux.svg' },
  { name: 'Arduino', file: 'arduino.svg' },
  { name: 'Raspberry Pi', file: 'raspberrypi.svg' },
];

const TECH_COLS = 6;
const TECH_ROWS = 3;

/**
 * Even, gap-free spread over the full hero width but only its upper band (above the title):
 * a jittered grid — exactly one icon per cell — so there are no empty stretches and no clumps.
 * Icons sit behind the arm (z-index), filling the negative space its silhouette leaves.
 */
function scatterTechIcons(): TechIcon[] {
  const cells: { r: number; c: number }[] = [];
  for (let r = 0; r < TECH_ROWS; r++) {
    for (let c = 0; c < TECH_COLS; c++) cells.push({ r, c });
  }
  cells.sort(() => Math.random() - 0.5);

  // Field as a fraction of the hero box: full width, top portion only.
  const x0 = 0.04, x1 = 0.96, y0 = 0.05, y1 = 0.55;
  const cellW = (x1 - x0) / TECH_COLS;
  const cellH = (y1 - y0) / TECH_ROWS;

  return TECH_ICONS.map((icon, i) => {
    const { r, c } = cells[i];
    const x = x0 + (c + 0.15 + Math.random() * 0.7) * cellW;
    const y = y0 + (r + 0.15 + Math.random() * 0.7) * cellH;
    return {
      name: icon.name,
      src: 'assets/tech/' + icon.file,
      x: x * 100,
      y: y * 100,
      size: 1.4 + Math.random() * 0.7,
      floatDuration: 4 + Math.random() * 4,
      floatDelay: -Math.random() * 8,
    };
  });
}

function makeSection(id: string, titleKey: string, items: CarouselItem[], scrollDuration: number): CarouselSection {
  let base = items;
  while (base.length < 6) {
    base = [...base, ...items];
  }
  return { id, titleKey, items, looped: [...base, ...base], scrollDuration };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [RobotArm],
})
export class Home {
  private isTouching = false;

  readonly i18n = inject(I18nService);
  readonly lightbox = signal<CarouselItem | null>(null);
  readonly year = new Date().getFullYear();
  readonly techIcons = scatterTechIcons();

  readonly sections: CarouselSection[] = [
    makeSection('experience', 'sections.experience', [
      { name: 'Heynow', image: 'assets/projects/heynow.png', url: 'https://heynowagents.ai/' },
      { name: 'Verifood', image: 'assets/projects/verifood.png', url: 'https://verifood.io/' },
      { name: 'LiberaSOFT', image: 'assets/projects/liberasoft.png', url: 'https://liberasoft.cloud' },
      { name: 'Revenue B2B', image: 'assets/projects/revenue.png', url: 'https://revenueb2b.com/' },
      { name: 'L.E.R', image: 'assets/projects/laestamosrompiendo.png', url: 'https://ecom.laestamosrompiendo.com/' },
    ], 50),
    makeSection('education', 'sections.education', [
      { name: 'UTN', image: 'assets/education/utn-react.jpeg' },
      { name: 'UBA', image: 'assets/education/uba-english.jpeg' },
      { name: 'EEMPI', image: 'assets/education/degree.jpeg' },
      { name: 'Platzi', image: 'assets/education/platzi-angular-avanzado.jpeg' },
      { name: 'Platzi', image: 'assets/education/platzi-docker-fundamentos.jpeg' },
      { name: 'Platzi', image: 'assets/education/platzi-flutter.jpeg' },
      { name: 'Platzi', image: 'assets/education/platzi-fundamentos-arduino.jpeg' },
      { name: 'Platzi', image: 'assets/education/platzi-laboratorio-angular-prueba.jpeg' },
      { name: 'Platzi', image: 'assets/education/platzi-n8n-lowcode.jpeg' },
      { name: 'Argentina Programa', image: 'assets/education/argentinaprograma-seprogramar.jpeg' },
      { name: 'Argentina Programa', image: 'assets/education/argentinaprograma-yoprogramo.jpeg' },
      { name: 'Codo a Codo', image: 'assets/education/codoacodo-fullstack.jpeg' },
      { name: 'freeCodeCamp', image: 'assets/education/freecodecamp-javascript.jpeg' },
      { name: 'freeCodeCamp', image: 'assets/education/freecodecamp-responsivewebdesign.jpeg' },
      { name: 'IT Master', image: 'assets/education/masterit-python.jpeg' },
      { name: 'Movistar', image: 'assets/education/movistar-cyberseguridad.jpeg' },
    ], 80),
    makeSection('brand', 'sections.brand', [
      { name: 'Matgigi', image: 'assets/brands/matgigi.png', url: 'https://matgigi.web.app/' },
    ], 30),
  ];

  scrollToSections() {
    document.getElementById(this.sections[0].id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMouseMove(event: MouseEvent) {
    if (this.isTouching) return;
    const area = event.currentTarget as HTMLElement;
    const rect = area.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const third = rect.width / 3;

    let zone: string;
    if (x < third) zone = 'left';
    else if (x < third * 2) zone = 'center';
    else zone = 'right';

    if (area.dataset['zone'] === zone) return;
    area.dataset['zone'] = zone;
    this.applyZone(area, zone);
  }

  onMouseLeave(event: MouseEvent) {
    if (this.isTouching) return;
    const area = event.currentTarget as HTMLElement;
    area.dataset['zone'] = 'none';
    this.applyZone(area, 'none');
  }

  onTouchStart(event: TouchEvent) {
    this.isTouching = true;
    this.applyZone(event.currentTarget as HTMLElement, 'center');
  }

  onTouchEnd(event: TouchEvent) {
    this.isTouching = false;
    this.applyZone(event.currentTarget as HTMLElement, 'none');
  }

  openLightbox(item: CarouselItem) {
    this.lightbox.set(item);
  }

  closeLightbox() {
    this.lightbox.set(null);
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }

  private applyZone(area: HTMLElement, zone: string) {
    area.querySelectorAll('.carousel-track').forEach(track => {
      (track as HTMLElement).getAnimations().forEach(anim => {
        switch (zone) {
          case 'left':
            if (anim.playState === 'paused') anim.play();
            anim.playbackRate = 3;
            break;
          case 'center':
            anim.pause();
            break;
          case 'right':
            if (anim.playState === 'paused') anim.play();
            anim.playbackRate = 0.5;
            break;
          default:
            if (anim.playState === 'paused') anim.play();
            anim.playbackRate = 1;
            break;
        }
      });
    });
  }
}
