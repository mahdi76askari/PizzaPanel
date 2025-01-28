import { Component, inject, OnInit } from '@angular/core';
import { BranchManagerService } from '../../../../services/http/branchManager.service';
import { AlertService } from '../../../../services/tools/alert.service';
import { DialogRef } from '@angular/cdk/dialog';
import { OrderService } from '../../../../services/http/order.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { InputTextComponent } from '../../../../components/elements/forms/input-text/input-text.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [ButtonComponent, InputTextComponent],
})
export class DetailsComponent implements OnInit {
  dialogRef = inject(DialogRef<DetailsComponent>);
  data = inject<any>(MAT_DIALOG_DATA);

  orderData: any = [];
  constructor(
    private bmService: BranchManagerService,
    private orderService: OrderService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.orderService.getOrder(this.data.id).subscribe({
      next: (v: any) => {
        this.orderData = v.data;
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
        this.dialogRef.close();
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
        this.dialogRef.close();
      },
    });
  }
}
