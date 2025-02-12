import { afterRender, Component, inject, OnInit } from '@angular/core';
import { InputPhoneComponent } from '../../elements/forms/input-phone/input-phone.component';
import { ButtonComponent } from '../../elements/button/button/button.component';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../services/http/account.service';
import { AlertService } from '../../../services/tools/alert.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BasketService } from '../../../services/http/basket.service';
import { InputOtpComponent } from '../../elements/forms/input-otp/input-otp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    InputPhoneComponent,
    ButtonComponent,
    FormsModule,
    InputOtpComponent,
  ],
})
export class LoginComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<LoginComponent>);

  phone = new FormControl<string>('', [
    Validators.minLength(11),
    Validators.maxLength(11),
  ]);
  otp = new FormControl('', [Validators.minLength(3), Validators.maxLength(5)]);
  isOtpSent = false;
  loading = false;
  constructor(
    private accountService: AccountService,
    private alertService: AlertService,
    private basketService: BasketService,
    private router: Router
  ) {}

  ngOnInit() {}

  sendOtp() {
    this.loading = true;
    this.accountService
      .sendOtp({ phoneNumber: '0' + this.phone.value!.toString() })
      .subscribe({
        next: (v) => {
          this.isOtpSent = true;
          this.loading = false;
        },
      });
  }

  verifyOtp() {
    this.accountService
      .verifyOtp({
        phoneNumber: '0' + this.phone.value!.toString(),
        otpCode: this.otp.value!.toString(),
      })
      .subscribe({
        next: (v: any) => {
          localStorage.setItem('token', v.data.accessToken);
          localStorage.setItem('tokenInsert', new Date().toDateString());

          localStorage.setItem('refreshToken', v.data.refreshToken);

          this.accountService.isLogin.set(true);
          if (v.data.role === 'admin') {
          }

          this.alertService.success({
            title: 'خوش آمدید',
            msg: 'به کاریز وارد شدید',
          });

          this.basketService.getCart('');

          this.getProfile();

          this.dialogRef.close();
        },
        error: (e: any) => {
          this.loading = false;
          this.alertService.error({
            title: 'خطا در ورود رخ داده است.',
            msg: e.error.message,
          });
        },
      });
  }

  getProfile() {
    this.accountService.getProfile().subscribe({
      next: (v: any) => {
        if (!v.data.userPlanName) {
          this.router.navigateByUrl('/profile');
        }
      },
    });
  }
}
