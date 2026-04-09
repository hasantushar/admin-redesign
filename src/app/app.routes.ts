import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      {
        path: 'news',
        loadComponent: () => import('./pages/news/news.component').then((m) => m.NewsComponent),
      },
      {
        path: 'touren',
        loadComponent: () => import('./pages/tours/tours.component').then((m) => m.ToursComponent),
      },
      {
        path: 'editor/:id',
        loadComponent: () => import('./pages/editor/editor.component').then((m) => m.EditorComponent),
      },
    ],
  },
];
