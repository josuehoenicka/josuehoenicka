import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { ARTICLES, type Article } from './blog-data';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly areas = ['Telecommuting', 'Software', 'Hardware'];
  private readonly areaOrder: Record<string, number> = { Telecommuting: 0, Software: 1, Hardware: 2 };
  readonly articles = ARTICLES;
  readonly pageSize = 5;

  readonly selectedAreas = signal<Set<string>>(new Set());
  readonly searchQuery = signal('');
  readonly page = signal(1);

  readonly filtered = computed(() => {
    const selected = this.selectedAreas();
    const query = this.searchQuery().toLowerCase().trim();
    let list = selected.size === 0 ? [...this.articles] : this.articles.filter(a => selected.has(a.area));
    if (query) {
      list = list.filter(a => this.i18n.t('technology.articles.' + a.slug + '.title').toLowerCase().includes(query));
    }
    return list.sort((a, b) => {
      const areaDiff = (this.areaOrder[a.area] ?? 99) - (this.areaOrder[b.area] ?? 99);
      if (areaDiff !== 0) return areaDiff;
      return b.updatedAt.localeCompare(a.updatedAt);
    });
  });

  readonly paginated = computed(() => {
    const list = this.filtered();
    const start = (this.page() - 1) * this.pageSize;
    return list.slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));

  isAreaSelected(area: string): boolean {
    return this.selectedAreas().has(area);
  }

  selectArea(area: string) {
    const current = new Set(this.selectedAreas());
    if (current.has(area)) {
      current.delete(area);
    } else {
      current.add(area);
    }
    this.selectedAreas.set(current);
    this.page.set(1);
  }

  onSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
    this.page.set(1);
  }

  goToPage(p: number) {
    this.page.set(p);
  }

  thumbnailUrl(youtube?: string): string {
    if (!youtube) return '';
    const match = youtube.match(/(?:embed\/|youtu\.be\/|v=)([^?&/]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
  }

  areaLabel(area: string): string {
    return this.i18n.t('technology.areas.' + area + '.name');
  }

  formatDate(iso: string): string {
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  openArticle(event: MouseEvent, article: Article) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.router.navigateByUrl(`/technology/project/${article.slug}`);
  }
}
