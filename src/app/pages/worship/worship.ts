import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { WORSHIP_ENTRIES, type Instrument } from './worship-data';

@Component({
  selector: 'app-worship',
  imports: [],
  templateUrl: './worship.html',
  styleUrl: './worship.scss',
})
export class Worship {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly instruments: Instrument[] = ['piano', 'guitar', 'drums'];
  readonly entries: typeof WORSHIP_ENTRIES = [];
  readonly pageSize = 5;

  readonly selectedInstruments = signal<Set<Instrument>>(new Set());
  readonly page = signal(1);

  readonly filtered = computed(() => {
    const selected = this.selectedInstruments();
    if (selected.size === 0) return [...this.entries];
    return this.entries.filter(e => e.instruments.some(i => selected.has(i)));
  });

  readonly paginated = computed(() => {
    const list = this.filtered();
    const start = (this.page() - 1) * this.pageSize;
    return list.slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));

  isInstrumentSelected(inst: Instrument): boolean {
    return this.selectedInstruments().has(inst);
  }

  selectInstrument(inst: Instrument) {
    const current = new Set(this.selectedInstruments());
    if (current.has(inst)) {
      current.delete(inst);
    } else {
      current.add(inst);
    }
    this.selectedInstruments.set(current);
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

  instrumentsList(instruments: Instrument[]): string {
    return instruments.map(i => this.i18n.t('worship.instruments.' + i)).join(' / ');
  }

  openEntry(event: MouseEvent, slug: string): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.router.navigate([`/worship/song/${slug}`]);
  }
}
