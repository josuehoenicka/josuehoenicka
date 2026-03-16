import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly i18n = inject(I18nService);

  readonly technicalSkills = [
    'JavaScript', 'Golang', 'Python', 'Angular', 'Flutter',
    'Node.js', 'SQL', 'NoSQL', 'n8n', 'Docker', 'Google Cloud', 'Azure',
  ];

  get softSkills(): string[] {
    return this.i18n.t('skills.soft_skills') as string[];
  }
}