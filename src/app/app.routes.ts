import { Routes } from '@angular/router';
import { accessGuard } from './guard/access.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/panel/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    canActivate: [accessGuard],
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
        path: 'plans',
        loadComponent: () =>
          import('./pages/plans/plans.component').then((c) => c.PlansComponent),
      },
      {
        path: 'plans/add',
        loadComponent: () =>
          import('./pages/plans/add-plan/add-plan.component').then(
            (c) => c.AddPlanComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component').then((c) => c.UsersComponent),
      },

      {
        path: 'company',
        loadComponent: () =>
          import('./pages/company/company.component').then(
            (c) => c.CompanyComponent
          ),
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
    path: 'branch-panel',
    loadComponent: () =>
      import('./layouts/branch-panel/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    canActivate: [accessGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-orders',
      },
      {
        path: 'my-orders',
        loadComponent: () =>
          import('./pages/branch-panel/my-orders/my-orders.component').then(
            (c) => c.MyOrdersComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/branch-panel/my-profile/my-profile.component').then(
            (c) => c.MyProfileComponent
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
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'logout',
        loadComponent: () =>
          import('./pages/auth/logout/logout.component').then(
            (c) => c.LogoutComponent
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
