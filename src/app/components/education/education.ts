import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly i18n = inject(I18nService);
  readonly expandedDescs = signal<Set<number>>(new Set());

  private split(key: string): string[] {
    return this.i18n.t(key).split('. ').map((s: string) => s.replace(/\.$/, '')).sort((a: string, b: string) => a.localeCompare(b));
  }

  get items(): { institution: string; description: string; certs: string[]; tags: string[] }[] {
    return [
      {
        institution: this.i18n.t('education.items.utn.institution'),
        description: this.i18n.t('education.items.utn.description'),
        certs: this.split('education.items.utn.desc'),
        tags: ['Arduino', 'C++', 'CSS', 'HTML', 'JavaScript', 'MySQL', 'Node.js', 'React.js'],
      },
      {
        institution: this.i18n.t('education.items.uba.institution'),
        description: this.i18n.t('education.items.uba.description'),
        certs: this.split('education.items.uba.desc'),
        tags: [],
      },
      {
        institution: this.i18n.t('education.items.eempi.institution'),
        description: this.i18n.t('education.items.eempi.description'),
        certs: this.split('education.items.eempi.desc'),
        tags: [],
      },
      {
        institution: this.i18n.t('education.items.platzi.institution'),
        description: this.i18n.t('education.items.platzi.description'),
        certs: this.split('education.items.platzi.desc'),
        tags: ['Angular', 'Arduino', 'Docker', 'Flutter', 'n8n', 'Node.js', 'Python'],
      },
      {
        institution: this.i18n.t('education.items.google.institution'),
        description: this.i18n.t('education.items.google.description'),
        certs: this.split('education.items.google.desc'),
        tags: ['MLOps'],
      },
      {
        institution: this.i18n.t('education.items.microsoft.institution'),
        description: this.i18n.t('education.items.microsoft.description'),
        certs: this.split('education.items.microsoft.desc'),
        tags: ['C#'],
      },
      {
        institution: this.i18n.t('education.items.itmaster.institution'),
        description: this.i18n.t('education.items.itmaster.description'),
        certs: this.split('education.items.itmaster.desc'),
        tags: ['Python'],
      },
      {
        institution: this.i18n.t('education.items.argprog.institution'),
        description: this.i18n.t('education.items.argprog.description'),
        certs: this.split('education.items.argprog.desc'),
        tags: ['CSS', 'HTML', 'Java', 'JavaScript', 'Ruby', 'Spring Boot'],
      },
      {
        institution: this.i18n.t('education.items.codoacodo.institution'),
        description: this.i18n.t('education.items.codoacodo.description'),
        certs: this.split('education.items.codoacodo.desc'),
        tags: ['CSS', 'HTML', 'JavaScript', 'MySQL', 'PHP'],
      },
      {
        institution: this.i18n.t('education.items.movistar.institution'),
        description: this.i18n.t('education.items.movistar.description'),
        certs: this.split('education.items.movistar.desc'),
        tags: [],
      },
      {
        institution: this.i18n.t('education.items.freecodecamp.institution'),
        description: this.i18n.t('education.items.freecodecamp.description'),
        certs: this.split('education.items.freecodecamp.desc'),
        tags: ['CSS', 'HTML', 'JavaScript'],
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