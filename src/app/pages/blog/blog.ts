import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { ARTICLES, type Article } from './blog-data';

type SortCol = 'id' | 'title' | 'area' | 'difficulty';
type SortDir = 'asc' | 'desc';

const DIFF_ORDER: Record<string, number> = { easy: 0, normal: 1, hard: 2 };

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly i18n = inject(I18nService);

  readonly areas = [
    'AI',
    'Blockchain',
    'Cloud',
    'Cybersecurity',
    'Data',
    'ER',
    'IoT',
    'Maths',
    'Mobile',
    'Robotics',
    'Science',
    'Web',
  ];

  readonly articles = ARTICLES;

  readonly selectedAreas = signal<Set<string>>(new Set());
  readonly sortCol = signal<SortCol>('id');
  readonly sortDir = signal<SortDir>('asc');

  readonly filtered = computed(() => {
    let list = [...this.articles];
    const areas = this.selectedAreas();
    if (areas.size > 0) list = list.filter(a => areas.has(a.area));

    const col = this.sortCol();
    const dir = this.sortDir();
    const mult = dir === 'asc' ? 1 : -1;
    list.sort((a, b) => {
      switch (col) {
        case 'id': return (a.id - b.id) * mult;
        case 'title': {
          const ta = this.i18n.t('technology.articles.' + a.slug + '.title');
          const tb = this.i18n.t('technology.articles.' + b.slug + '.title');
          return ta.localeCompare(tb) * mult;
        }
        case 'area': return a.area.localeCompare(b.area) * mult;
        case 'difficulty': return (DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty]) * mult;
      }
    });
    return list;
  });

  toggleArea(area: string) {
    const current = new Set(this.selectedAreas());
    if (current.has(area)) current.delete(area);
    else current.add(area);
    this.selectedAreas.set(current);
  }

  toggleSort(col: SortCol) {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCol.set(col);
      this.sortDir.set('asc');
    }
  }

  sortIcon(col: SortCol): string {
    if (this.sortCol() !== col) return '';
    return this.sortDir() === 'asc' ? '▲' : '▼';
  }

  difficultyLabel(d: string): string {
    return this.i18n.t('technology.difficulty.' + d);
  }
}
