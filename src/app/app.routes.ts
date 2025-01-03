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
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: '404',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'branches',
        loadComponent: () =>
          import('./pages/branches/branches.component').then(
            (c) => c.BranchesComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (c) => c.ProductsComponent
          ),
      },
      {
        path: 'reports/branch',
        loadComponent: () =>
          import('./pages/reports/branch-report/branch-report.component').then(
            (c) => c.BranchReportComponent
          ),
      },
      {
        path: 'reports/user',
        loadComponent: () =>
          import('./pages/reports/user-report/user-report.component').then(
            (c) => c.UserReportComponent
          ),
      },
      {
        path: 'reports/product',
        loadComponent: () =>
          import(
            './pages/reports/product-report/product-report.component'
          ).then((c) => c.ProductReportComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component').then((c) => c.UsersComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
