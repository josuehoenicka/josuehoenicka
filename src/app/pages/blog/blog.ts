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
  readonly articles = ARTICLES;
  readonly pageSize = 5;

  readonly selectedAreas = signal<Set<string>>(new Set());
  readonly page = signal(1);

  readonly filtered = computed(() => {
    const selected = this.selectedAreas();
    if (selected.size === 0) return [...this.articles];
    return this.articles.filter(a => selected.has(a.area));
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

  openArticle(event: MouseEvent, article: Article) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.router.navigateByUrl(`/technology/project/${article.slug}`);
  }
}
