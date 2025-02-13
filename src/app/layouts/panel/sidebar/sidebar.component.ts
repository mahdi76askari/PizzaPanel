import { Component } from '@angular/core';

import { adminSideMenu } from '../../../models/adminSideMenu';
import { IAdminSideMenu } from '../../../interfaces/IAdminSideMenu';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../components/elements/fonts/icon/icon.component';
import { CircleButtonComponent } from '../../../components/elements/button/circle-button/circle-button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent, CircleButtonComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menu = adminSideMenu;
  child: IAdminSideMenu[] = [];
  url = '';
  itemId = '';
  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e.type === 1) {
        this.url = router.url.replace('/', '');
      }
    });
  }

  ngOnInit() {}

  action(item: IAdminSideMenu, child?: IAdminSideMenu) {
    if (this.itemId == item.id) {
      if (child) {
        this.router.navigateByUrl('/' + child.url);
      }
    } else {
      this.itemId = item.id;
      if (item.url) {
        this.child = [];
        this.router.navigateByUrl('/' + item.url);
      } else {
        this.child = item.child!;
      }
    }
  }
}
