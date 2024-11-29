import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'documentation',
    loadChildren: () => import('../../projects/documentation/src/app/documentation.routes').then((m) => m.routes),
  },
  {
    path: 'nucleus',
    loadChildren: () => import('../../projects/nucleus/src/app/nucleus.routes').then((m) => m.routes),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('../../projects/portfolio/src/app/portfolio.routes').then((m) => m.routes),
  },
  {
    path: 'shop',
    loadChildren: () => import('../../projects/shop/src/app/shop.routes').then((m) => m.routes),
  },
  {
    path: 'recipes',
    loadChildren: () => import('../../projects/recipes/src/app/recipes.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: '/portfolio' },
];
