import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly i18n = inject(I18nService);

  warpTo(id: string) {
    const overlay = document.createElement('div');
    overlay.className = 'galaxy-warp';
    document.body.appendChild(overlay);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'auto' });
      }
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), 500);
    }, 600);
  }
}
