import { afterRender, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    SidebarComponent,
    MatSidenavModule,
  ],
})
export class LayoutComponent implements OnInit {
  sideMode: MatDrawerMode = 'over';
  opened: boolean = false;
  constructor() {
    afterRender(() => {
      if (window.innerWidth > 480) {
        this.sideMode = 'side';
        this.opened = true;
      }
    });
  }

  ngOnInit() {}
}
