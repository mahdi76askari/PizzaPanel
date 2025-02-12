import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../../services/http/order.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent } from '../../elements/button/button/button.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [ButtonComponent],
})
export class OrderDetailsComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<OrderDetailsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  detail: any = {
    cartItemes: [],
  };
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getDetail(this.data.id);
  }

  getDetail(id: any) {
    const param = `/${id}`;

    this.orderService.getOrder(param).subscribe({
      next: (v: any) => {
        this.detail = v.data;
      },
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
