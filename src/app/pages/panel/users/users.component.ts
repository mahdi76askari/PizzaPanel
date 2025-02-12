import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { AdminService } from '../../../services/http/admin.service';
import { TomanPipe } from '../../../pipes/toman.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
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
  imports: [
    CommonModule,
    MatTableModule,
    ButtonComponent,
    TomanPipe,
    MatPaginatorModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [
    'userId',
    'name',
    'mobile',
    'address',
    'create_date',
    'status',
    'planName',
    'planExpirationDateShamsi',
    'action',
  ];
  transactions: Users[] = [];

  adminService = inject(AdminService);

  total: number = 0;
  pageSize: number = 25;
  pageNumber: number = 1;

  loading = false;

  groups: any;

  dialog = inject(MatDialog);

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    let param = `?pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`;

    this.adminService.getUsers(param).subscribe({
      next: (v: any) => {
        this.transactions = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }

  pagination(event: any) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUsers();
  }

  addUser() {
    this.dialog
      .open(NewUserComponent)
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getUsers();
        },
      });
  }

  edit(user: any) {
    this.dialog
      .open(NewUserComponent, { data: { user: user } })
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getUsers();
        },
      });
  }

  editRole(user: any) {
    this.dialog
      .open(EditRoleComponent, { data: { user: user } })
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getUsers();
        },
      });
  }
}
