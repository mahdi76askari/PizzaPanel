import { Component, effect, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../../services/http/account.service';
import { BasketService } from '../../../services/http/basket.service';

@Component({
  selector: 'app-mobile-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.css'],
})
export class MobileFooterComponent implements OnInit {
  isLogin = false;
  constructor(
    private accountService: AccountService,
    private basketService: BasketService,
    private router: Router
  ) {
    effect(() => {
      this.isLogin = accountService.isLogin();
    });
  }
  ngOnInit() {}

  openBasket() {
    this.basketService.openBasket.set(true);
  }

  login() {
    this.accountService.requestLogin.set(true);
  }

  homeNavigate() {
    console.log(this.router.url);

    if (this.router.url === '/') {
      window.scrollTo(0, 0);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
