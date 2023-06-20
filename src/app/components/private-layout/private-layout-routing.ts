import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./private-layout.component').then(
        (c) => c.PrivateLayoutComponent
      ),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./base-layout/base-layout-routing').then((c) => c.baseRoutes),
      },
      {
        path: 'kyc',
        loadComponent: () =>
          import('./features-layout/kyc/kyc.component').then(
            (c) => c.KycComponent
          ),
      },
      {
        path: 'withdraw',
        loadComponent: () =>
          import('./features-layout/withdraw/withdraw.component').then(
            (c) => c.WithdrawComponent
          ),
      },
    ],
  },
];
