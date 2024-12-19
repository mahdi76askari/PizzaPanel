export interface IAdminSideMenu {
  id: string;
  title: string;
  url?: string;
  icon: string;
  child?: IAdminSideMenu[];
}
