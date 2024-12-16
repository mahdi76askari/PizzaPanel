import { IAdminSideMenu } from '../interfaces/IAdminSideMenu';

export const adminSideMenu: IAdminSideMenu[] = [
  {
    title: 'داشبورد',
    url: 'dashboard',
    icon: 'pi-th-large',
  },
  {
    title: 'سفارش ها',
    url: 'orders',
    child: [],
    icon: 'pi-cart-arrow-down',
  },
  {
    title: 'شعب',
    url: 'branches',
    child: [],
    icon: 'pi-building-columns',
  },
  {
    title: 'کاربران',
    url: 'users',
    child: [],
    icon: 'pi-users',
  },
  {
    title: 'گزارش ها',

    child: [
      {
        title: 'گزارش شعب',
        icon: '',
        url: 'reports/branch',
      },
      {
        title: 'گزارش محصولات',
        icon: '',
        url: 'reports/product',
      },
      {
        title: 'گزارش کاربران',
        icon: '',
        url: 'reports/user',
      },
    ],
    icon: 'pi-chart-bar',
  },
];
