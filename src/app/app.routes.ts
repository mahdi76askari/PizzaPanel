import { Routes } from '@angular/router';
import { accessGuard } from './guard/access.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/landing/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/user-panels/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
      {
        path: 'addresses',
        loadComponent: () =>
          import('./pages/user-panels/addresses/addresses.component').then(
            (c) => c.AddressesComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/user-panels/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: 'orders-history',
        loadComponent: () =>
          import(
            './pages/user-panels/orders-history/orders-history.component'
          ).then((c) => c.OrdersHistoryComponent),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/user-panels/checkout/checkout.component').then(
            (c) => c.CheckoutComponent
          ),
      },
      {
        path: 'common-questions',
        loadComponent: () =>
          import(
            './pages/others/common-questions/common-questions.component'
          ).then((c) => c.CommonQuestionsComponent),
      },
      {
        path: 'complaint',
        loadComponent: () =>
          import('./pages/others/complaint/complaint.component').then(
            (c) => c.ComplaintComponent
          ),
      },
      {
        path: 'criticisms',
        loadComponent: () =>
          import('./pages/others/criticisms/criticisms.component').then(
            (c) => c.CriticismsComponent
          ),
      },
      {
        path: 'delivery-process',
        loadComponent: () =>
          import(
            './pages/others/delivery-process/delivery-process.component'
          ).then((c) => c.DeliveryProcessComponent),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('./pages/others/rules/rules.component').then(
            (c) => c.RulesComponent
          ),
      },
      {
        path: 'mobile-basket',
        loadComponent: () =>
          import(
            './pages/others/mobile-basket-card/mobile-basket-card.component'
          ).then((c) => c.MobileBasketCardComponent),
      },
      {
        path: 'plans/buy',
        loadComponent: () =>
          import('./pages/user-panels/plans/buy/buy.component').then(
            (c) => c.BuyComponent
          ),
      },
      {
        path: 'sign-out',
        loadComponent: () =>
          import('./pages/user-panels/sign-out/sign-out.component').then(
            (c) => c.SignOutComponent
          ),
      },
    ],
  },
  {
    path: 'panel',
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
          import('./pages/panel/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/panel/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'branches',
        loadComponent: () =>
          import('./pages/panel/branches/branches.component').then(
            (c) => c.BranchesComponent
          ),
      },
      {
        path: 'branches/add',
        loadComponent: () =>
          import('./pages/panel/branches/add-branch/add-branch.component').then(
            (c) => c.AddBranchComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/panel/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/panel/products/products.component').then(
            (c) => c.ProductsComponent
          ),
      },
      {
        path: 'reports/branch',
        loadComponent: () =>
          import(
            './pages/panel/reports/branch-report/branch-report.component'
          ).then((c) => c.BranchReportComponent),
      },
      {
        path: 'reports/user',
        loadComponent: () =>
          import(
            './pages/panel/reports/user-report/user-report.component'
          ).then((c) => c.UserReportComponent),
      },
      {
        path: 'reports/product',
        loadComponent: () =>
          import(
            './pages/panel/reports/product-report/product-report.component'
          ).then((c) => c.ProductReportComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/panel/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },
      {
        path: 'plans',
        loadComponent: () =>
          import('./pages/panel/plans/plans.component').then(
            (c) => c.PlansComponent
          ),
      },
      {
        path: 'plans/add',
        loadComponent: () =>
          import('./pages/panel/plans/add-plan/add-plan.component').then(
            (c) => c.AddPlanComponent
          ),
      },
      {
        path: 'plans/edit/:plan',
        loadComponent: () =>
          import('./pages/panel/plans/add-plan/add-plan.component').then(
            (c) => c.AddPlanComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/panel/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },

      {
        path: 'company',
        loadComponent: () =>
          import('./pages/panel/company/company.component').then(
            (c) => c.CompanyComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/panel/profile/profile.component').then(
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
          import('./pages/panel/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'logout',
        loadComponent: () =>
          import('./pages/panel/auth/logout/logout.component').then(
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
