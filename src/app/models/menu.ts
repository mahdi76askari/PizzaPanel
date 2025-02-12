import { IMenu } from '../interfaces/IMenu';

export const menu: IMenu[] = [
  {
    title: 'صفحه اصلی',
    url: '',
  },
  {
    title: 'سفارش ها',
    url: '/orders',
  },
  {
    title: 'تاریخچه سفارش ها',
    url: '/orders-history',
  },
  {
    title: 'اطلاعات من',
    url: '/profile',
  },
  {
    title: 'آدرس ها',
    url: '/addresses',
  },
  {
    title: 'خروج',
    url: '/sign-out',
  },
];
