import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../components/elements/button/button/button.component';
import { AdminService } from '../../services/http/admin.service';
interface Users {
  id: string;
  name: string;
  mobile: string;
  address: string;
  create_date: string;
  status: boolean;
  action: any;
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, ButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [
    '#',
    'name',
    'mobile',
    'address',
    'create_date',
    'status',
    'action',
  ];
  transactions: Users[] = [
    {
      id: '1',
      name: 'aa',
      mobile: '09132138958',
      address: 'asdf',
      create_date: '2024/03/03',
      status: true,
      action: '',
    },
  ];

  adminService = inject(AdminService);

  users: any;

  total: number = 0;
  pageSize: number = 30;
  pageNumber: number = 1;

  loading = false;

  groups: any;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    let param = `?pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`;

    this.adminService.getUsers(param).subscribe({
      next: (v: any) => {
        this.users = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }
}
