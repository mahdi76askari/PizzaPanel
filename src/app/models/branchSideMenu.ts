import { IAdminSideMenu } from '../interfaces/IAdminSideMenu';

export const branchSideMenu: IAdminSideMenu[] = [
  {
    id: '2',
    title: 'سفارش ها',
    url: 'branch-panel/my-orders',
    child: [],
    icon: 'pi-cart-arrow-down',
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
