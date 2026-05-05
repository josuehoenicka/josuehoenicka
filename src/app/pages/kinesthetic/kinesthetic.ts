import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { KINESTHETIC_ENTRIES, type Discipline } from './kinesthetic-data';

@Component({
  selector: 'app-kinesthetic',
  imports: [],
  templateUrl: './kinesthetic.html',
  styleUrl: './kinesthetic.scss',
})
export class Kinesthetic {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly disciplines: Discipline[] = ['workout', 'swimming', 'football'];
  readonly entries = KINESTHETIC_ENTRIES;
  readonly pageSize = 5;

  readonly selectedDisciplines = signal<Set<Discipline>>(new Set());
  readonly page = signal(1);

  readonly filtered = computed(() => {
    const selected = this.selectedDisciplines();
    if (selected.size === 0) return [...this.entries];
    return this.entries.filter(e => selected.has(e.discipline));
  });

  readonly paginated = computed(() => {
    const list = this.filtered();
    const start = (this.page() - 1) * this.pageSize;
    return list.slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));

  isDisciplineSelected(d: Discipline): boolean {
    return this.selectedDisciplines().has(d);
  }

  selectDiscipline(d: Discipline) {
    const current = new Set(this.selectedDisciplines());
    if (current.has(d)) {
      current.delete(d);
    } else {
      current.add(d);
    }
    this.selectedDisciplines.set(current);
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

  disciplineLabel(d: string): string {
    return this.i18n.t('kinesthetic.disciplines.' + d);
  }

  openEntry(event: MouseEvent, slug: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.router.navigateByUrl(`/kinesthetic/discipline/${slug}`);
  }
}
