import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'es' | 'pt';

const LANG_LOADERS: Record<Lang, () => Promise<Record<string, any>>> = {
  en: () => import('../i18n/en.json').then(m => m.default),
  es: () => import('../i18n/es.json').then(m => m.default),
  pt: () => import('../i18n/pt.json').then(m => m.default),
};

const translations: Partial<Record<Lang, Record<string, any>>> = {};
const SUPPORTED_LANGS: Lang[] = ['en', 'es', 'pt'];
const LANG_STORAGE_KEY = 'portfolio_lang';
const LANG_COOKIE_KEY = 'portfolio_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.getInitialLang());
  readonly ready = signal(false);

  constructor() {
    const lang = this.lang();
    this.persistLang(lang);
    this.syncDocumentLang(lang);
    this.loadTranslations(lang).then(() => this.ready.set(true));
  }

  async setLang(lang: Lang) {
    await this.loadTranslations(lang);
    this.lang.set(lang);
    this.persistLang(lang);
    this.syncDocumentLang(lang);
  }

  t(key: string): any {
    const keys = key.split('.');
    let result: any = translations[this.lang()];
    for (const k of keys) {
      result = result?.[k];
    }
    return result ?? key;
  }

  private async loadTranslations(lang: Lang): Promise<void> {
    if (translations[lang]) return;
    translations[lang] = await LANG_LOADERS[lang]();
  }

  private getInitialLang(): Lang {
    return 'en';
  }

  private readStoredLang(): Lang | null {
    const localLang = this.readLocalStorage();
    if (localLang) return localLang;

    const cookieLang = this.readCookie();
    if (cookieLang) return cookieLang;

    return null;
  }

  private readLocalStorage(): Lang | null {
    if (typeof window === 'undefined') return null;

    try {
      const value = window.localStorage.getItem(LANG_STORAGE_KEY);
      return this.isLang(value) ? value : null;
    } catch {
      return null;
    }
  }

  private readCookie(): Lang | null {
    if (typeof document === 'undefined') return null;

    const cookie = document.cookie
      .split('; ')
      .find(entry => entry.startsWith(LANG_COOKIE_KEY + '='));

    if (!cookie) return null;

    const value = decodeURIComponent(cookie.split('=').slice(1).join('='));
    return this.isLang(value) ? value : null;
  }

  private persistLang(lang: Lang) {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LANG_STORAGE_KEY, lang);
      } catch {
        // Ignore storage errors in restricted browsing contexts.
      }
    }

    if (typeof document !== 'undefined') {
      document.cookie = `${LANG_COOKIE_KEY}=${encodeURIComponent(lang)}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }

  private syncDocumentLang(lang: Lang) {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  private isLang(value: string | null): value is Lang {
    return value !== null && SUPPORTED_LANGS.includes(value as Lang);
  }
}
