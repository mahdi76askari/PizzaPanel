import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../components/elements/button/button/button.component';
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
  imports: [CommonModule, MatTableModule, CurrencyPipe, ButtonComponent],
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
}
