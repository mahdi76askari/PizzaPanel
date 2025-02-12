import { Component, OnInit } from '@angular/core';

import { InputTextComponent } from '../../../../components/elements/forms/input-text/input-text.component';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { AccountService } from '../../../../services/http/account.service';
import { FormControl, Validators } from '@angular/forms';
import { AlertService } from '../../../../services/tools/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [InputTextComponent, ButtonComponent],
})
export class LoginComponent implements OnInit {
  step = 0;
  loading = false;
  phone = new FormControl<string>('', [
    Validators.minLength(11),
    Validators.maxLength(11),
  ]);
  otp = new FormControl('', [Validators.minLength(3), Validators.maxLength(5)]);

  constructor(
    private accountService: AccountService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (this.step == 0) {
      this.sendOtp();
    } else {
      this.verifyOtp();
    }
  }

  sendOtp() {
    this.loading = true;
    this.accountService.sendOtp({ phoneNumber: this.phone.value! }).subscribe({
      next: (v) => {
        this.step = 1;
        this.loading = false;
      },
    });
  }

  verifyOtp() {
    this.accountService
      .verifyOtp({ phoneNumber: this.phone.value!, otpCode: this.otp.value! })
      .subscribe({
        next: (v: any) => {
          if (
            v.data.role.find((r: any) => {
              return r === 'Admin';
            })
          ) {
            localStorage.setItem('token', v.data.accessToken);
            localStorage.setItem('tokenInsert', new Date().toDateString());
            localStorage.setItem('refreshToken', v.data.refreshToken);
            this.accountService.isLogin.set(true);
            this.alertService.success({
              title: 'خوش آمدید',
              msg: 'به کاریز وارد شدید',
            });

            this.router.navigateByUrl('/');
          } else if (
            v.data.role.find((r: any) => {
              return r === 'BranchManager';
            })
          ) {
            localStorage.setItem('token', v.data.accessToken);
            localStorage.setItem('tokenInsert', new Date().toDateString());
            localStorage.setItem('refreshToken', v.data.refreshToken);
            this.accountService.isLogin.set(true);
            this.alertService.success({
              title: 'خوش آمدید',
              msg: 'به کاریز وارد شدید',
            });

            this.router.navigateByUrl('/branch-panel');
          } else {
            this.alertService.error({
              title: 'امکان وورد نیست ',
              msg: 'شما دسترسی ندارید ',
            });
          }
        },
      });
  }
}
