import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public-layout.component').then((c) => c.PublicLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'help',
        loadComponent: () =>
          import('./help/help.component').then((c) => c.HelpComponent),
      },
      {
        path: 'onboarding',
        loadComponent: () =>
          import('./onboarding/onboarding.component').then(
            (c) => c.OnboardingComponent
          ),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./privacy/privacy.component').then((c) => c.PrivacyComponent),
      },
      {
        path: 'refund-cancellation-policy',
        loadComponent: () =>
          import(
            './refund-cancellation-policy/refund-cancellation-policy.component'
          ).then((c) => c.RefundCancellationPolicyComponent),
      },
      {
        path: 'service-terms',
        loadComponent: () =>
          import('./terms-of-service/terms-of-service.component').then(
            (c) => c.TermsOfServiceComponent
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
