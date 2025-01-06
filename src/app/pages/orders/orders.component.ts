import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AdminService } from '../../services/http/admin.service';
import { OrderRowComponent } from './order-row/order-row.component';
import { LoadingComponent } from '../../components/blocks/loading/loading.component';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    OrderRowComponent,
    LoadingComponent,
    NgxMaskDirective,
    FormsModule,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  status = '1';

  fromDate = '1403/01/01 10:00';
  toDate = '1403/01/01 23:59';

  adminService = inject(AdminService);

  orders: any;

  total: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;

  loading = false;

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.loading = true;
    const param = '';
    this.adminService.getOrders(param).subscribe({
      next: (v: any) => {
        this.orders = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }

  selectFilter(value: string) {
    this.status = value;
  }
}
