import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { AccountService } from '../../../services/http/account.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
  imports: [ButtonComponent, RouterModule],
})
export class SignOutComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {}

  signout() {
    localStorage.clear();
    this.accountService.isLogin.set(false);
    this.router.navigateByUrl('/');
  }
}
