import { Component, inject, OnInit } from '@angular/core';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { AdminService } from '../../../services/http/admin.service';
import { FormControl, FormsModule } from '@angular/forms';
import { PlansService } from '../../../services/http/plans.service';
import { CompanyService } from '../../../services/http/company.service';
import { AlertService } from '../../../services/tools/alert.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  standalone: true,
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  imports: [SelectComponent, ButtonComponent, InputTextComponent, FormsModule],
})
export class NewUserComponent implements OnInit {
  phoneNumber = new FormControl('');
  firstNameAndLastName = new FormControl('');

  roleId = new FormControl('Customer');
  companyId = new FormControl('');

  planId = new FormControl('');

  plans: any = [];
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

  constructor(
    private adminService: AdminService,
    private plansService: PlansService,
    private companyService: CompanyService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getPlans();
    this.getCompanies();
  }

  save() {
    let body: any = {
      phoneNumber: this.phoneNumber.value,
      firstNameAndLastName: this.firstNameAndLastName.value,
      roleName: this.roleId.value,
    };

    if (this.companyId.value) {
      body.companyId = this.companyId.value;
    }
    if (this.planId.value) {
      body.planId = this.planId.value;
    }

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
  }

  getPlans() {
    const param = '';
    this.plansService.getPlans(param).subscribe({
      next: (v: any) => {
        this.plans = v.data.map((d: any) => {
          return {
            value: d.planId,
            name: d.planName,
          };
        });
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
}
