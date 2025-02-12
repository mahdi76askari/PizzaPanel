import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectComponent } from '../../../../components/elements/forms/select/select.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { AdminService } from '../../../../services/http/admin.service';
import { AlertService } from '../../../../services/tools/alert.service';

@Component({
  selector: 'app-edit-role',
  standalone: true,
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css'],
  imports: [SelectComponent, ButtonComponent],
})
export class EditRoleComponent implements OnInit {
  dialogRef = inject(MatDialogRef<EditRoleComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  roleId = new FormControl('Customer');
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

  constructor(
    private adminService: AdminService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  change() {
    const body = {
      userId: this.data.user.userId,
      roleName: this.roleId.value,
    };
    this.adminService.assignRole(body).subscribe({
      next: (v: any) => {
        this.alertService.success({ title: 'نقش کاربری تنظیم شد', msg: '' });
        this.dialogRef.close();
      },
    });
  }
}
