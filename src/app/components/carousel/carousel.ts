import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

export interface Company {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  readonly i18n = inject(I18nService);

  /**
   * Agrega las empresas aquí. Cada empresa tiene:
   * - name: Nombre de la empresa
   * - logoUrl: Ruta al logo (puede ser en /logos/ dentro de public/ o una URL externa)
   * - websiteUrl: URL de la página web de la empresa
   */
  readonly companies: Company[] = [
    { name: 'Heynow', logoUrl: 'logos/heynow.svg', websiteUrl: 'https://heynow.ai' },
    { name: 'LiberaSoft Cloud', logoUrl: 'logos/liberasoft.svg', websiteUrl: 'https://liberasoft.com.ar' },
    { name: 'Verifood', logoUrl: 'logos/verifood.svg', websiteUrl: 'https://verifood.io' },
    { name: 'LER', logoUrl: 'logos/ler.svg', websiteUrl: 'https://equipo.laestamosrompiendo.com/' },
    { name: 'MihWave', logoUrl: 'logos/mihwave.svg', websiteUrl: 'https://mihwave.com' },
    { name: 'Revenue B2B', logoUrl: 'logos/revenue.svg', websiteUrl: 'https://revenueb2b.com/' },
  ];

  get duplicatedCompanies(): Company[] {
    return [...this.companies, ...this.companies];
  }
}
