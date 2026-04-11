import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { BLOG_POSTS } from './blog-data';

@Component({
  selector: 'app-blog-personal',
  imports: [RouterLink],
  templateUrl: './blog-personal.html',
  styleUrl: './blog-personal.scss',
})
export class BlogPersonal {
  readonly i18n = inject(I18nService);
  readonly posts = BLOG_POSTS;
}
