import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly i18n = inject(I18nService);

  get experiences(): { company: string; period: any; roles: string[]; description: any; tags: string[] }[] {
    return [
      {
        company: 'Heynow',
        period: this.i18n.t('experience.heynow_period'),
        roles: ['Front-End Architect', 'Full Stack AI Developer'],
        description: this.i18n.t('experience.heynow_desc'),
        tags: ['Angular', 'Docker', 'Azure', 'AI', 'A2A'],
      },
      {
        company: 'LiberaSOFT',
        period: this.i18n.t('experience.liberasoft_period'),
        roles: ['Sr. Front-End Developer', 'Full Stack Developer', 'AI Integration Developer'],
        description: this.i18n.t('experience.liberasoft_desc'),
        tags: ['Angular', 'PrimeNG', 'Node.js', 'MySQL', 'MongoDB', 'n8n', 'Python', 'RAG'],
      },
    ];
  }
}