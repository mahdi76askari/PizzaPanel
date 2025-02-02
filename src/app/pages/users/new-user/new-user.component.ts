import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { AdminService } from '../../../services/http/admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  imports: [SelectComponent, ButtonComponent, InputTextComponent, FormsModule],
})
export class NewUserComponent implements OnInit {
  phoneNumber: string = '';
  firstNameAndLastName: string = '';
  roleName: string = '';
  companyId: string = '';
  planId = 0;

  rols = [
    {
      name: 'Admin',
      value: 'Admin',
    },
    {
      name: 'BranchManager',
      value: 'BranchManager',
    },
    {
      name: 'Customer',
      value: 'Customer',
    },
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  save() {
    const body = {
      phoneNumber: this.phoneNumber,
      firstNameAndLastName: this.firstNameAndLastName,
      roleName: this.roleName,
      companyId: this.companyId,
      planId: this.planId,
    };
    this.adminService.newUser(body).subscribe({
      next: (v: any) => {},
    });
  }
}
