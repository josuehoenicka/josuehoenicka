import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Project {
  company: string;
  websiteUrl: string;
  image: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly i18n = inject(I18nService);
  readonly lightbox = signal<Project | null>(null);

  readonly experiences: Project[] = [
    { company: 'Heynow', websiteUrl: 'https://heynowagents.ai/', image: 'assets/projects/heynow.png' },
    { company: 'Verifood', websiteUrl: 'https://verifood.io/', image: 'assets/projects/verifood.png' },
    { company: 'LiberaSOFT', websiteUrl: 'https://liberasoft.cloud', image: 'assets/projects/liberasoft.png' },
    { company: 'Revenue B2B', websiteUrl: 'https://revenueb2b.com/', image: 'assets/projects/revenue.png' },
    { company: 'L.E.R', websiteUrl: 'https://ecom.laestamosrompiendo.com/', image: 'assets/projects/laestamosrompiendo.png' },
  ];

  get looped(): Project[] {
    return [...this.experiences, ...this.experiences];
  }

  openLightbox(project: Project) {
    this.lightbox.set(project);
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
