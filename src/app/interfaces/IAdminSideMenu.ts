export interface IAdminSideMenu {
  title: string;
  url: string;
  icon: string;
  child: IAdminSideMenu[];
}
