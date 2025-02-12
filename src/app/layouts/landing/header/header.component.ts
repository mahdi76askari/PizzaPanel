import { Component, effect } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AccountService } from '../../../services/http/account.service';
import { LoginBarComponent } from '../login-bar/login-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, LoginBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public accountService: AccountService) {
    effect(() => {
      accountService.isLogin();
    });
  }
}
