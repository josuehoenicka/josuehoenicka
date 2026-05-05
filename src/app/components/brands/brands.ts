import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Brand {
  name: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-brands',
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands {
  readonly i18n = inject(I18nService);
  readonly lightbox = signal<Brand | null>(null);

  readonly brands: Brand[] = [
    { name: 'Matgigi', image: 'assets/brands/matgigi.png', url: 'https://matgigi.web.app/' },
    { name: 'Mihwave', image: 'assets/brands/mihwave.png', url: 'https://mihwave.web.app/' },
  ];

  get looped(): Brand[] {
    return [...this.brands, ...this.brands];
  }

  openLightbox(brand: Brand) {
    this.lightbox.set(brand);
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
