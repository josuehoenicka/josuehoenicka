import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'technology', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog) },
  { path: 'technology/project/:slug', loadComponent: () => import('./pages/blog/article/article').then(m => m.ArticlePage) },
  { path: 'interculturality', loadComponent: () => import('./pages/interculturality/interculturality').then(m => m.Interculturality) },
  { path: 'kinesthetic', loadComponent: () => import('./pages/kinesthetic/kinesthetic').then(m => m.Kinesthetic) },
  { path: 'kinesthetic/discipline/:slug', loadComponent: () => import('./pages/kinesthetic/discipline/discipline').then(m => m.DisciplinePage) },
  { path: '**', redirectTo: '' },
];
