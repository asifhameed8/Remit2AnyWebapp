import { Routes } from '@angular/router';
import { privatePagesGuard, publicPagesGuard } from './services/route-guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/public-layout/public-layout-routing').then(
        (m) => m.publicRoutes
      ),
  },
  {
    path: 'auth',
    canActivate: [publicPagesGuard],
    loadChildren: () =>
      import('./components/auth-layout/auth-layout-routing').then(
        (m) => m.authRoutes
      ),
  },
  {
    path: 'secure',
    canActivate: [privatePagesGuard],
    loadChildren: () =>
      import('./components/private-layout/private-layout-routing').then(
        (m) => m.privateRoutes
      ),
  },
  {
    path: 'withdraw-money',
    redirectTo: 'secure/withdraw',
  },
  {
    path: 'dashboard',
    redirectTo: 'secure/dashboard',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
