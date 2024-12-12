import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/panel/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
  },
];
