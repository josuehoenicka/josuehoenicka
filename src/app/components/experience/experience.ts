import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly i18n = inject(I18nService);
  readonly expandedDescs = signal<Set<number>>(new Set());

  get experiences(): { company: string; period: any; roles: string[]; description: any; tags: string[] }[] {
    return [
      {
        company: 'Heynow',
        period: this.i18n.t('experience.heynow_period'),
        roles: ['Front-End Architect', 'Full Stack AI Developer'],
        description: this.i18n.t('experience.heynow_desc'),
        tags: ['Angular', 'Azure', 'Docker', 'Kubernetes', 'MongoDB', 'Node.js', 'SQLServer'],
      },
      {
        company: 'LiberaSOFT',
        period: this.i18n.t('experience.liberasoft_period'),
        roles: ['AI Integration Developer', 'Front-End Developer', 'Full Stack Developer', 'Sr. Front-End Developer'],
        description: this.i18n.t('experience.liberasoft_desc'),
        tags: ['Angular', 'Docker', 'MongoDB', 'n8n', 'Node.js', 'PostgreSQL'],
      },
    ];
  }

  isExpanded(index: number): boolean {
    return this.expandedDescs().has(index);
  }

  toggleDesc(index: number) {
    const current = new Set(this.expandedDescs());
    if (current.has(index)) current.delete(index);
    else current.add(index);
    this.expandedDescs.set(current);
  }
}