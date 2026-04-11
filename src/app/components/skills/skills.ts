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
    'JavaScript', 'Python', 'C++', 'Google Cloud', 'Linux',
    'ROS 2', 'Tessel 2', 'Raspberry Pi', 'ESP32',
  ];

  get softSkills(): string[] {
    return this.i18n.t('skills.soft_skills') as string[];
  }
}