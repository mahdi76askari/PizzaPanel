import { Component, inject, OnInit } from '@angular/core';
import { BranchManagerService } from '../../../../services/http/branchManager.service';
import { AlertService } from '../../../../services/tools/alert.service';
import { DialogRef } from '@angular/cdk/dialog';
import { OrderService } from '../../../../services/http/order.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { InputTimeMinComponent } from '../../../../components/elements/forms/input-time-min/input-time-min.component';
import { IconComponent } from '../../../../components/elements/fonts/icon/icon.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [ButtonComponent, FormsModule, InputTimeMinComponent, IconComponent],
})
export class DetailsComponent implements OnInit {
  dialogRef = inject(DialogRef<DetailsComponent>);
  data = inject<any>(MAT_DIALOG_DATA);

  orderData: any = [];

  orderStatus: any;

  preparationTime = new FormControl();
  shippingTime = new FormControl();
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
        this.orderStatus = v.data.orderStatus;
      },
    });
  }

  setTime(orderId: any, status: any) {
    const body = {
      orderId: orderId,
      preparationTime: this.preparationTime.value,
      shippingTime: this.shippingTime.value,
    };
    this.bmService.updateTimes(body).subscribe({
      next: (v: any) => {
        this.setStatus(orderId, status);
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

  close() {
    this.dialogRef.close();
  }
}
