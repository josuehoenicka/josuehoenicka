import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { KINESTHETIC_ENTRIES, Discipline } from './kinesthetic-data';

type SortCol = 'id' | 'title' | 'discipline' | 'difficulty';
type SortDir = 'asc' | 'desc';

const DIFF_ORDER: Record<string, number> = { easy: 0, normal: 1, hard: 2 };

@Component({
  selector: 'app-kinesthetic',
  imports: [RouterLink],
  templateUrl: './kinesthetic.html',
  styleUrl: './kinesthetic.scss',
})
export class Kinesthetic {
  readonly i18n = inject(I18nService);

  readonly disciplines: Discipline[] = ['freestyle', 'swimming', 'drums'];
  readonly entries = KINESTHETIC_ENTRIES;

  readonly selectedDisciplines = signal<Set<Discipline>>(new Set());
  readonly sortCol = signal<SortCol>('id');
  readonly sortDir = signal<SortDir>('asc');

  readonly filtered = computed(() => {
    const d = this.selectedDisciplines();
    let list = d.size > 0 ? this.entries.filter(e => d.has(e.discipline)) : [...this.entries];
    if (d.size === 0) list = [...this.entries];

    const col = this.sortCol();
    const dir = this.sortDir();
    const mult = dir === 'asc' ? 1 : -1;
    list.sort((a, b) => {
      switch (col) {
        case 'id': return (a.id - b.id) * mult;
        case 'title': {
          const ta = this.i18n.t('kinesthetic.entries.' + a.slug + '.title');
          const tb = this.i18n.t('kinesthetic.entries.' + b.slug + '.title');
          return ta.localeCompare(tb) * mult;
        }
        case 'discipline': {
          const da = this.disciplineLabel(a.discipline);
          const db = this.disciplineLabel(b.discipline);
          return da.localeCompare(db) * mult;
        }
        case 'difficulty': return (DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty]) * mult;
      }
    });
    return list;
  });

  toggleDiscipline(d: Discipline) {
    const current = new Set(this.selectedDisciplines());
    if (current.has(d)) current.delete(d);
    else current.add(d);
    this.selectedDisciplines.set(current);
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

  disciplineLabel(d: string): string {
    return this.i18n.t('kinesthetic.disciplines.' + d);
  }

  difficultyLabel(d: string): string {
    return this.i18n.t('kinesthetic.difficulty.' + d);
  }
}
