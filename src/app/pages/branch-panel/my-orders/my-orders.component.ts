import { Component } from '@angular/core';
import { BranchManagerService } from '../../../services/http/branchManager.service';
import { AlertService } from '../../../services/tools/alert.service';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
})
export class MyOrdersComponent {
  orders: any = [];
  constructor(
    private bmService: BranchManagerService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  getOrders() {
    this.bmService.getOrders('').subscribe({
      next: (v: any) => {
        this.orders = v.data;
      },
    });
  }

  setTime(orderId: any) {
    const body = {
      orderId: orderId,
      preparationTime: '',
      shippingTime: '',
    };
    this.bmService.updateTimes(body).subscribe({
      next: (v: any) => {
        this.getOrders();
      },
    });
  }

  setStatus(orderId: any, status: any) {
    const body = {
      orderId: orderId,
      newStatus: status,
    };
    this.bmService.updateStatus(body).subscribe({
      next: (v: any) => {
        this.getOrders();
      },
    });
  }
}
