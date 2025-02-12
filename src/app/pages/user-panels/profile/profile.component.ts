import { Component } from '@angular/core';

import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { TitleComponent } from '../../../components/elements/forms/title/title.component';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { InputBirthdayComponent } from '../../../components/elements/forms/input-birthday/input-birthday.component';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../../../services/http/account.service';
import { AlertService } from '../../../services/tools/alert.service';
import { PlansComponent } from '../plans/plans.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    InputTextComponent,
    TitleComponent,
    ButtonComponent,
    InputBirthdayComponent,
    SelectComponent,
    PlansComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  sexual = [
    { name: 'مرد', value: 'man' },
    { name: 'زن', value: 'woman' },
  ];

  formGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    birthDay: new FormControl(''),
    sexual: new FormControl('man'),
  });

  profile: any;
  constructor(
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    this.accountService.getProfile().subscribe({
      next: (v: any) => {
        this.profile = v.data;
        this.formGroup.controls.name.patchValue(v.data.firstNameAndLastName);
        this.formGroup.controls.phone.patchValue(v.data.phoneNumber);
        this.formGroup.controls.birthDay.patchValue(v.data.dateOfBirthShamsi);
        this.formGroup.controls.sexual.patchValue(v.data.gender);
      },
    });
  }

  submit() {
    const body = {
      phoneNumber: this.formGroup.controls.phone.value,
      name: this.formGroup.controls.name.value,
      dateOfBirthPersian: `${this.formGroup.controls.birthDay.value} 00:00:00`,
      gender: this.formGroup.controls.sexual.value,
    };
    this.accountService.updateProfile(body).subscribe({
      next: (v: any) => {
        this.alertService.success({
          title: 'به روز رسانی انجام شد',
          msg: 'پروفایل کاربری شما به روز رسانی شد',
        });
      },
    });
  }
}
