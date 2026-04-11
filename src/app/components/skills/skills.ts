import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly i18n = inject(I18nService);

  readonly languages = [
    { flag: 'https://flagcdn.com/w80/us.png', key: 'summary.lang_en' },
    { flag: 'https://flagcdn.com/w80/es.png', key: 'summary.lang_es' },
    { flag: 'https://flagcdn.com/w80/br.png', key: 'summary.lang_pt' },
  ];

  readonly technologies = [
    { icon: 'assets/technologies/javascript.svg', label: 'JavaScript' },
    { icon: 'assets/technologies/python.svg', label: 'Python' },
    { icon: 'assets/technologies/cplusplus.png', label: 'C++' },
    { icon: 'assets/technologies/golang.png', label: 'Golang' },
    { icon: 'assets/technologies/dart.svg', label: 'Dart' },
  ];

  readonly skills = [
    { icon: 'assets/skills/comfort-zone.svg', key: 'summary.skill_comfort' },
    { icon: 'assets/skills/adaptive.svg', key: 'summary.skill_adaptive' },
    { icon: 'assets/skills/perseverance.svg', key: 'summary.skill_perseverance' },
    { icon: 'assets/skills/detail.svg', key: 'summary.skill_detail' },
    { icon: 'assets/skills/teamwork.svg', key: 'summary.skill_teamwork' },
  ];
}