import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'technology', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog) },
  { path: 'technology/project/:slug', loadComponent: () => import('./pages/blog/article/article').then(m => m.ArticlePage) },
  { path: 'interculturality', loadComponent: () => import('./pages/interculturality/interculturality').then(m => m.Interculturality) },
  { path: 'kinesthetics', loadComponent: () => import('./pages/kinesthetics/kinesthetics').then(m => m.Kinesthetics) },
  { path: 'kinesthetics/discipline/:slug', loadComponent: () => import('./pages/kinesthetics/discipline/discipline').then(m => m.DisciplinePage) },
  { path: '**', redirectTo: '' },
];
