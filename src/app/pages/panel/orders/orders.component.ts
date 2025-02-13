import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../../../services/http/admin.service';
import { OrderRowComponent } from './order-row/order-row.component';
import { LoadingComponent } from '../../../components/blocks/loading/loading.component';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import jalaali from 'jalaali-js';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

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
export class OrdersComponent implements OnInit, OnDestroy {
  status = 'all';

  fromDate = '1403/09/01 10:00';
  toDate = '1403/09/01 23:59';

  adminService = inject(AdminService);

  orders: any;

  total: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;

  loading = false;

  private inputChangeSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  ngOnInit() {
    let fDate = jalaali.toJalaali(new Date());
    this.fromDate =
      fDate.jy +
      '/' +
      fDate.jm.toString().padStart(2, '0') +
      '/' +
      fDate.jd.toString().padStart(2, '0') +
      ' ' +
      '10:00';

    this.toDate =
      fDate.jy +
      '/' +
      fDate.jm.toString().padStart(2, '0') +
      '/' +
      fDate.jd.toString().padStart(2, '0') +
      ' ' +
      '23:59';
    this.getOrders();
    this.inputChangeSubject
      .pipe(
        debounceTime(1000), // Wait for 1 second of inactivity
        takeUntil(this.destroy$) // Unsubscribe when the component is destroyed
      )
      .subscribe(() => {
        this.getOrders();
      });
  }

  getOrders() {
    this.loading = true;
    this.orders = [];
    let param = `?fromDatePersian=${this.dateFixer(
      this.fromDate
    )}:00&toDatePersian=${this.dateFixer(this.toDate)}:00`;
    if (this.status != 'all') {
      param += `&orderStatuses=${this.status}`;
    }
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
    this.getOrders();
  }

  ngOnDestroy() {
    // Clean up the subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInputChange(value: string) {
    // Emit the new value to the subject
    this.inputChangeSubject.next(value);
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
        x[11]
      );
    }
  }
}
