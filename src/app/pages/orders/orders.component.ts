import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/elements/button/button/button.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../../components/blocks/order-details/order-details.component';
import { AdminService } from '../../services/http/admin.service';
import { OrderRowComponent } from './order-row/order-row.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ButtonComponent, OrderRowComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  status = '1';

  adminService = inject(AdminService);

  orders: any;

  total: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    const param = '';
    this.adminService.getOrders(param).subscribe({
      next: (v: any) => {
        this.orders = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
      },
    });
  }

  selectFilter(value: string) {
    this.status = value;
  }
}
