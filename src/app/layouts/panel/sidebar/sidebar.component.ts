import { Component } from '@angular/core';

import { adminSideMenu } from '../../../models/adminSideMenu';
import { IAdminSideMenu } from '../../../interfaces/IAdminSideMenu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menu = adminSideMenu;
  child: IAdminSideMenu[] = [];
  url = '';
  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e.type === 1) {
        // console.log(e.type);
        this.url = router.url.replace('/', '');
        // console.log(this.url);
      }
    });
  }

  ngOnInit() {}

  action(item: IAdminSideMenu) {
    if (item.url) {
      this.router.navigateByUrl('/' + item.url);
    } else {
      this.child = item.child;
    }
  }
}
