import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly i18n = inject(I18nService);
  readonly activeIndex = signal(0);

  readonly items = [
    { key: 'education.items.unr', icon: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5', accent: '#ffffff' },
    { key: 'education.items.uba', icon: 'M12 3v18M3 12h18', accent: '#cccccc' },
    { key: 'education.items.eempi', icon: 'M3 21h18M5 21V7l7-4 7 4v14', accent: '#ffffff' },
    { key: 'education.items.utn', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', accent: '#cccccc' },
    { key: 'education.items.itmaster', icon: 'M4 17l6-6-6-6M12 19h8', accent: '#ffffff' },
    { key: 'education.items.argprog', icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6', accent: '#cccccc' },
    { key: 'education.items.codoacodo', icon: 'M20 7h-9M14 17H5M17 17a2 2 0 100-4 2 2 0 000 4zM7 7a2 2 0 100-4 2 2 0 000 4z', accent: '#ffffff' },
    { key: 'education.items.movistar', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', accent: '#cccccc' },
    { key: 'education.items.platzi', icon: 'M9 12l2 2 4-4M7.835 4.697A3.42 3.42 0 009.78 3.89a3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', accent: '#ffffff' },
    { key: 'education.items.freecodecamp', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', accent: '#cccccc' },
  ];

  prev() {
    this.activeIndex.update(i => (i > 0 ? i - 1 : this.items.length - 1));
  }

  next() {
    this.activeIndex.update(i => (i < this.items.length - 1 ? i + 1 : 0));
  }
}