import { IAdminSideMenu } from '../interfaces/IAdminSideMenu';

export const adminSideMenu: IAdminSideMenu[] = [
  {
    id: '1',
    title: 'داشبورد',
    url: 'panel/dashboard',
    icon: 'pi-th-large',
  },
  {
    id: '2',
    title: 'سفارش ها',
    url: 'panel/orders',
    child: [],
    icon: 'pi-cart-arrow-down',
  },
  {
    id: '3',
    title: 'شعب',
    url: 'panel/branches',
    child: [],
    icon: 'pi-building-columns',
  },
  {
    id: '31',
    title: 'پلن ها',
    url: 'panel/plans',
    child: [],
    icon: 'pi-building-columns',
  },
  {
    id: '4',
    title: 'محصولات',
    url: 'panel/products',
    child: [],
    icon: 'pi-box',
  },
  {
    id: '5',
    title: 'کاربران',
    url: 'panel/users',
    child: [],
    icon: 'pi-users',
  },
  {
    id: '55',
    title: 'شرکت ها',
    url: 'panel/company',
    child: [],
    icon: 'pi-users',
  },
  // {
  //   id: '6',
  //   title: 'گزارش ها',
  //   child: [
  //     {
  //       id: '601',
  //       title: 'گزارش شعب',
  //       icon: '',
  //       url: 'reports/branch',
  //     },
  //     {
  //       id: '602',
  //       title: 'گزارش محصولات',
  //       icon: '',
  //       url: 'reports/product',
  //     },
  //     {
  //       id: '603',
  //       title: 'گزارش کاربران',
  //       icon: '',
  //       url: 'reports/user',
  //     },
  //   ],
  //   icon: 'pi-chart-bar',
  // },
];
