import { IAdminSideMenu } from '../interfaces/IAdminSideMenu';

export const adminSideMenu: IAdminSideMenu[] = [
  {
    title: 'داشبورد',
    url: '',
    child: [],
    icon: 'dashboard.svg',
  },
  {
    title: 'سفارش ها',
    url: 'orders',
    child: [],
    icon: 'award.svg',
  },
  {
    title: 'شعب',
    url: 'branches',
    child: [],
    icon: 'vector.svg',
  },
  {
    title: 'کاربران',
    url: 'users',
    child: [],
    icon: 'calendar-time.svg',
  },
  {
    title: 'گزارش ها',
    url: 'reports',
    child: [],
    icon: 'users.svg',
  },
  {
    title: 'تنظیمات',
    url: 'settings',
    child: [],
    icon: 'truck-delivery.svg',
  },
];
