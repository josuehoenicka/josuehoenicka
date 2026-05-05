import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface CarouselItem {
  name: string;
  image: string;
  url?: string;
}

interface CarouselSection {
  title: string;
  items: CarouselItem[];
  looped: CarouselItem[];
  scrollDuration: number;
}

function makeSection(title: string, items: CarouselItem[], scrollDuration: number): CarouselSection {
  let base = items;
  while (base.length < 6) {
    base = [...base, ...items];
  }
  return { title, items, looped: [...base, ...base], scrollDuration };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  private sectionIntervalId: ReturnType<typeof setInterval> | null = null;
  private fadeTimeoutId: ReturnType<typeof setTimeout> | null = null;

  readonly i18n = inject(I18nService);
  readonly activeIndex = signal(0);
  readonly fading = signal(false);
  readonly paused = signal(false);
  readonly mode = signal<'auto' | 'manual'>('auto');
  readonly lightbox = signal<CarouselItem | null>(null);

  readonly sections: CarouselSection[] = [
    makeSection('WORKSPACE', [
      { name: 'Heynow', image: 'assets/projects/heynow.png', url: 'https://heynowagents.ai/' },
      { name: 'Verifood', image: 'assets/projects/verifood.png', url: 'https://verifood.io/' },
      { name: 'LiberaSOFT', image: 'assets/projects/liberasoft.png', url: 'https://liberasoft.cloud' },
      { name: 'Revenue B2B', image: 'assets/projects/revenue.png', url: 'https://revenueb2b.com/' },
      { name: 'L.E.R', image: 'assets/projects/laestamosrompiendo.png', url: 'https://ecom.laestamosrompiendo.com/' },
    ], 50),
    makeSection('EDUCATION', [
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
    makeSection('BRAND', [
      { name: 'Matgigi', image: 'assets/brands/matgigi.png', url: 'https://matgigi.web.app/' },
      { name: 'Mihwave', image: 'assets/brands/mihwave.png', url: 'https://mihwave.web.app/' },
    ], 30),
  ];

  readonly socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/josuehoenicka' },
    { name: 'Instagram', url: 'https://www.instagram.com/josuehoenicka' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@josue.hoenicka' },
    { name: 'YouTube', url: 'https://www.youtube.com/@josuehoenicka' },
    { name: 'GitHub', url: 'https://github.com/josuehoenicka' },
  ];

  ngOnInit() {
    this.startSectionAutoPlay();
  }

  ngOnDestroy() {
    this.stopSectionAutoPlay();
  }

  toggleMode() {
    if (this.mode() === 'auto') {
      this.mode.set('manual');
      this.stopSectionAutoPlay();
      this.paused.set(false);
    } else {
      this.mode.set('auto');
      this.startSectionAutoPlay();
    }
  }

  onPointerDown() {
    if (this.mode() === 'auto') {
      this.paused.set(true);
    }
  }

  onPointerUp() {
    this.paused.set(false);
  }

  goTo(index: number) {
    if (index === this.activeIndex()) return;
    this.fading.set(true);
    this.fadeTimeoutId = setTimeout(() => {
      this.activeIndex.set(index);
      this.fading.set(false);
    }, 400);
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

  private startSectionAutoPlay() {
    this.sectionIntervalId = setInterval(() => {
      this.fading.set(true);
      this.fadeTimeoutId = setTimeout(() => {
        this.activeIndex.set((this.activeIndex() + 1) % this.sections.length);
        this.fading.set(false);
      }, 400);
    }, 5000);
  }

  private stopSectionAutoPlay() {
    if (this.sectionIntervalId) {
      clearInterval(this.sectionIntervalId);
      this.sectionIntervalId = null;
    }
    if (this.fadeTimeoutId) {
      clearTimeout(this.fadeTimeoutId);
      this.fadeTimeoutId = null;
    }
  }
}
