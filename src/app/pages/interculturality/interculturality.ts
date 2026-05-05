import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-interculturality',
  imports: [],
  templateUrl: './interculturality.html',
  styleUrl: './interculturality.scss',
})
export class Interculturality {
  readonly i18n = inject(I18nService);

  readonly languages = ['english', 'spanish', 'portuguese'];
  readonly selectedLangs = signal<Set<string>>(new Set());

  isLangSelected(lang: string): boolean {
    return this.selectedLangs().has(lang);
  }

  selectLang(lang: string) {
    const current = new Set(this.selectedLangs());
    if (current.has(lang)) {
      current.delete(lang);
    } else {
      current.add(lang);
    }
    this.selectedLangs.set(current);
  }
}
