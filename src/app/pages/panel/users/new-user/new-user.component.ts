import { Component, inject, OnInit } from '@angular/core';
import { SelectComponent } from '../../../../components/elements/forms/select/select.component';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { InputTextComponent } from '../../../../components/elements/forms/input-text/input-text.component';
import { AdminService } from '../../../../services/http/admin.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlansService } from '../../../../services/http/plans.service';
import { CompanyService } from '../../../../services/http/company.service';
import { AlertService } from '../../../../services/tools/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-new-user',
  standalone: true,
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  imports: [
    SelectComponent,
    ButtonComponent,
    InputTextComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
})
export class NewUserComponent implements OnInit {
  phoneNumber = new FormControl('');
  firstNameAndLastName = new FormControl('');
  creditAmount = new FormControl('');
  planActivationDate = new FormControl('');

  roleId = new FormControl('Customer');
  companyId = new FormControl('');

  planId = new FormControl();

  plans: any = [
    {
      name: 'بدون پلن',
      value: 0,
    },
  ];
  companies: any = [];

  rols = [
    {
      name: 'مشتری',
      value: 'Customer',
    },
    {
      name: 'مدیر سامانه',
      value: 'Admin',
    },
    {
      name: 'مدیر شعبه',
      value: 'BranchManager',
    },
  ];

  dialogRef = inject(MatDialogRef<NewUserComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  mode: string = 'add';

  constructor(
    private adminService: AdminService,
    private plansService: PlansService,
    private companyService: CompanyService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getPlans();
    this.getCompanies();

    if (this.data && this.data.user) {
      this.mode = 'edit';
      this.patchData();
    }
  }

  patchData() {
    this.firstNameAndLastName.patchValue(this.data.user.firstNameAndLastName);
    this.phoneNumber.patchValue(this.data.user.phoneNumber);
    this.planId.patchValue(this.data.user.planId);
    this.companyId.patchValue(this.data.user.companyId);
    this.creditAmount.patchValue(this.data.user.creditAmount);
    if (!this.data.user.planId) {
      this.planId.patchValue(0);
    }
    this.planActivationDate.patchValue(this.data.user.planActivationDate);
  }

  save() {
    let body: any = {
      phoneNumber: this.phoneNumber.value,
      firstNameAndLastName: this.firstNameAndLastName.value,
      creditAmount: this.creditAmount.value,
    };

    if (this.planActivationDate.value?.length) {
      if (this.planActivationDate.value?.length != 19) {
        body.planActivationDate = this.dateFixer(this.planActivationDate.value);
      } else {
        body.planActivationDate = this.planActivationDate.value;
      }
    }

    if (this.companyId.value) {
      body.companyId = Number(this.companyId.value);
    }
    if (this.planId.value) {
      body.planId = Number(this.planId.value);
    } else {
      body.planId = 0;
      body.planActivationDate = null;
    }

    if (this.mode === 'add') {
      body.roleName = this.roleId.value;
      this.adminService.newUser(body).subscribe({
        next: (v: any) => {
          this.companyId.reset();
          this.planId.reset();
          this.phoneNumber.reset();
          this.firstNameAndLastName.reset();
          this.roleId.reset();

          this.alertService.success({ title: 'کاربر جدید اضافه شد', msg: '' });
        },
      });
    } else {
      body.userId = this.data.user.userId;
      this.adminService.updateUser(body).subscribe({
        next: (v: any) => {
          this.companyId.reset();
          this.planId.reset();
          this.phoneNumber.reset();
          this.firstNameAndLastName.reset();
          this.roleId.reset();

          this.alertService.success({ title: 'کاربر  ویرایش شد', msg: '' });
          this.cancel();
        },
      });
    }
  }

  getPlans() {
    const param = '';
    this.plansService.getPlans(param).subscribe({
      next: (v: any) => {
        const planList = v.data.map((d: any) => {
          return {
            value: d.planId,
            name: d.planName,
          };
        });
        this.plans.push(...planList);
      },
    });
  }

  getCompanies() {
    const param = '';
    this.companyService.getCompanies(param).subscribe({
      next: (v: any) => {
        this.companies = v.data.map((d: any) => {
          return {
            value: d.companyId,
            name: d.name,
          };
        });
      },
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  dateFixer(val: string) {
    if (val.length == 16) {
      return val;
    } else {
      let x = val.split('');
      // console.log(x);
      return (
        x[0] +
        x[1] +
        x[2] +
        x[3] +
        '/' +
        x[4] +
        x[5] +
        '/' +
        x[6] +
        x[7] +
        ' ' +
        x[8] +
        x[9] +
        ':' +
        x[10] +
        x[11] +
        ':00'
      );
    }
  }
}
