import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Project {
  name: string;
  descKey: string;
  logoUrl: string;
  url: string;
  tags: string[];
  gradient: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly i18n = inject(I18nService);
  readonly activeIndex = signal(0);

  readonly projects: Project[] = [
    {
      name: 'Heynow',
      descKey: 'projects.heynow_desc',
      logoUrl: 'logos/heynow.svg',
      url: 'https://heynow-ai.com/',
      tags: ['Angular', 'Nodejs', 'Python', 'Azure'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    },
    {
      name: 'LiberaSOFT',
      descKey: 'projects.liberasoft_desc',
      logoUrl: 'logos/liberasoft.svg',
      url: 'https://liberasoft.com.ar',
      tags: ['Angular', 'Node.js', 'SQL', 'n8n'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    },
    {
      name: 'Verifood',
      descKey: 'projects.verifood_desc',
      logoUrl: 'logos/verifood.svg',
      url: 'https://verifood.io',
      tags: ['Flutter', 'Python'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    },
    {
      name: 'MIH Wave',
      descKey: 'projects.mihwave_desc',
      logoUrl: 'logos/mihwave.svg',
      url: 'https://mihwave.web.app/',
      tags: ['Flutter', 'Firebase'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    },
    {
      name: 'LER',
      descKey: 'projects.ler_desc',
      logoUrl: 'logos/ler.svg',
      url: 'https://equipo.laestamosrompiendo.com/',
      tags: ['Angular', 'Nodejs', 'Firebase'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    },
    {
      name: 'Revenue B2B',
      descKey: 'projects.revenue_desc',
      logoUrl: 'logos/revenue.svg',
      url: 'https://revenueb2b.com/',
      tags: ['n8n', 'Zapier', 'Mail HTML'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    },
  ];

  setActive(index: number) {
    this.activeIndex.set(index);
  }

  prev() {
    this.activeIndex.update(i => (i > 0 ? i - 1 : this.projects.length - 1));
  }

  next() {
    this.activeIndex.update(i => (i < this.projects.length - 1 ? i + 1 : 0));
  }
}