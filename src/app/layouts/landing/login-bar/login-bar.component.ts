import { Component, effect, inject, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../components/blocks/login/login.component';
import { AccountService } from '../../../services/http/account.service';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';

@Component({
  selector: 'app-login-bar',
  standalone: true,
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css'],
  imports: [ButtonComponent],
})
export class LoginBarComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  accountService = inject(AccountService);

  constructor() {
    effect(() => {
      if (this.accountService.requestLogin()) {
        this.login();
      }
    });
  }

  ngOnInit() {}

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.accountService.requestLogin.set(false);
      if (result !== undefined) {
      }
    });
  }
}
