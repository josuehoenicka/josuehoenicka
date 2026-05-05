import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Travel {
  country: string;
  flag: string;
  photosUrl: string;
}

@Component({
  selector: 'app-travels',
  templateUrl: './travels.html',
  styleUrl: './travels.scss',
})
export class Travels {
  readonly i18n = inject(I18nService);
  readonly lightbox = signal<Travel | null>(null);

  readonly travels: Travel[] = [
    { country: 'Chile', flag: 'assets/travels/chile.png', photosUrl: 'https://www.instagram.com/stories/highlights/17956504242088917/' },
    { country: 'Argentina', flag: 'assets/travels/argentina.png', photosUrl: 'https://www.instagram.com/stories/highlights/17929908813191783/' },
    { country: 'Venezuela', flag: 'assets/travels/venezuela.png', photosUrl: 'https://www.instagram.com/stories/highlights/17864644809549905/' },
    { country: 'Panamá', flag: 'assets/travels/panama.svg', photosUrl: 'https://www.instagram.com/stories/highlights/18078385439199703/' },
  ];

  get looped(): Travel[] {
    return [...this.travels, ...this.travels];
  }

  openLightbox(travel: Travel) {
    this.lightbox.set(travel);
  }

  closeLightbox() {
    this.lightbox.set(null);
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }
}
