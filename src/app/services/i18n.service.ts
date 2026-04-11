import { Injectable, signal } from '@angular/core';

import es from '../i18n/es.json';
import en from '../i18n/en.json';
import pt from '../i18n/pt.json';
import zh from '../i18n/zh.json';
import hi from '../i18n/hi.json';
import ar from '../i18n/ar.json';
import ru from '../i18n/ru.json';

export type Lang = 'en' | 'es' | 'pt' | 'zh' | 'hi' | 'ar' | 'ru';

const translations: Record<Lang, Record<string, any>> = { en, es, pt, zh, hi, ar, ru };

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>('en');

  setLang(lang: Lang) {
    this.lang.set(lang);
  }

  t(key: string): any {
    const keys = key.split('.');
    let result: any = translations[this.lang()];
    for (const k of keys) {
      result = result?.[k];
    }
    return result ?? key;
  }
}
