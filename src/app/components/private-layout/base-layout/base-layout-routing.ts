import { Routes } from '@angular/router';

export const baseRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./base-layout.component').then((c) => c.BaseLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((c) => c.ProfileComponent),
      },
      {
        path: 'bank-accounts',
        loadComponent: () =>
          import('./bank-accounts/bank-accounts.component').then(
            (c) => c.BankAccountsComponent
          ),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./transactions/transactions.component').then(
            (c) => c.TransactionsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
