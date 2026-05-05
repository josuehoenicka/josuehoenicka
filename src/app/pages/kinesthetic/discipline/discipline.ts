import { Component, inject, computed, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { marked } from 'marked';
import { I18nService } from '../../../services/i18n.service';
import { KINESTHETIC_ENTRIES, KinestheticEntry } from '../kinesthetic-data';
import { configureMarkedRenderer, handleCodeBlockClick } from '../../../utils/code-renderer';
import { resolveVideoSource } from '../../../utils/video-source';
import { NetworkStatusService } from '../../../services/network-status.service';

@Component({
  selector: 'app-discipline',
  imports: [RouterLink],
  templateUrl: './discipline.html',
  styleUrl: './discipline.scss',
})
export class DisciplinePage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  readonly i18n = inject(I18nService);
  readonly network = inject(NetworkStatusService);

  readonly entry = signal<KinestheticEntry | null>(null);

  constructor() {
    configureMarkedRenderer();
  }

  readonly renderedContent = computed<SafeHtml>(() => {
    const e = this.entry();
    if (!e) return '';
    const lang = this.i18n.lang();
    const md = e.content[lang] || e.content['en'] || '';
    const html = marked.parse(md, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  });

  readonly videoSource = computed(() => {
    const e = this.entry();
    return resolveVideoSource(e?.youtube, this.sanitizer);
  });

  readonly youtubeUrl = computed<SafeResourceUrl | null>(() => {
    const video = this.videoSource();
    return video?.kind === 'youtube' ? video.safeUrl : null;
  });

  goBack(event: MouseEvent): void {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.router.navigateByUrl('/kinesthetic');
  }

  onContentClick(event: Event): void {
    handleCodeBlockClick(event);
  }

  scrollToVideo(): void {
    document.getElementById('discipline-video')?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = KINESTHETIC_ENTRIES.find(e => e.slug === slug) || null;
    this.entry.set(found);
  }
}
