import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly i18n = inject(I18nService);
  readonly currentYear = new Date().getFullYear();

  readonly links = [
    {
      name: 'Gmail',
      url: 'mailto:josuehoenicka@gmail.com',
      icon: 'email',
      label: 'josuehoenicka@gmail.com',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/josuehoenicka',
      icon: 'linkedin',
      label: '/in/josuehoenicka',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/josuehoenicka',
      icon: 'instagram',
      label: '@josuehoenicka',
    },
  ];
}
