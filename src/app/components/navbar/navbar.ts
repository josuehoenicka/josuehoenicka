import { Component, signal, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService, Lang } from '../../services/i18n.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  protected readonly isScrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly langMenuOpen = signal(false);

  readonly langs: { code: Lang; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'zh', label: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
    { code: 'hi', label: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
    { code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  ];

  get currentLangLabel(): string {
    return this.langs.find(l => l.code === this.i18n.lang())?.label ?? this.i18n.lang();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    this.langMenuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  isRoute(path: string): boolean {
    if (path === '/') return this.router.url === '/';
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  navigateWithWarp(path: string) {
    const overlay = document.createElement('div');
    overlay.className = 'galaxy-warp';
    document.body.appendChild(overlay);
    setTimeout(() => {
      this.router.navigate([path]).then(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 500);
      });
    }, 600);
  }

  scrollTo(id: string) {
    this.closeMenu();
    const doScroll = () => {
      const overlay = document.createElement('div');
      overlay.className = 'galaxy-warp';
      document.body.appendChild(overlay);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
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
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 500);
      }, 600);
    };

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => setTimeout(doScroll, 100));
    } else {
      doScroll();
    }
  }

  toggleLangMenu(e: Event) {
    e.stopPropagation();
    this.langMenuOpen.update(v => !v);
  }

  switchLang(lang: Lang, e: Event) {
    e.stopPropagation();
    this.i18n.setLang(lang);
    this.langMenuOpen.set(false);
  }
}
