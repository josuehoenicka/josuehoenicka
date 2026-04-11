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
        this.centerSection(el);
      }
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), 500);
    }, 600);
  }

  private centerSection(el: HTMLElement) {
    const nav = document.querySelector('.navbar') as HTMLElement;
    const navH = nav ? nav.offsetHeight : 60;
    const rect = el.getBoundingClientRect();
    const available = window.innerHeight - navH;
    const top =
      rect.height >= available
        ? window.scrollY + rect.top - navH
        : window.scrollY + rect.top - navH - (available - rect.height) / 2;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }
}
