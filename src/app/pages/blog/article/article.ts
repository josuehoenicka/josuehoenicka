import { Component, inject, computed, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { marked } from 'marked';
import { I18nService, Lang } from '../../../services/i18n.service';
import { ARTICLES, Article } from '../blog-data';
import { configureMarkedRenderer, handleCodeBlockClick } from '../../../utils/code-renderer';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class ArticlePage implements OnInit {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  readonly i18n = inject(I18nService);

  readonly article = signal<Article | null>(null);

  constructor() {
    configureMarkedRenderer();
  }

  readonly renderedContent = computed<SafeHtml>(() => {
    const a = this.article();
    if (!a) return '';
    const lang = this.i18n.lang();
    const md = a.content[lang] || a.content['en'] || '';
    const html = marked.parse(md, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  });

  readonly youtubeUrl = computed<SafeResourceUrl | null>(() => {
    const a = this.article();
    if (!a || !a.youtube) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(a.youtube);
  });

  onContentClick(event: Event): void {
    handleCodeBlockClick(event);
  }

  scrollToVideo(): void {
    document.getElementById('article-video')?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = ARTICLES.find(a => a.slug === slug) || null;
    this.article.set(found);
  }
}
