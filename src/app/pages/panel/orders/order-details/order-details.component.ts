import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { EnumPipe } from '../../../../pipes/enum.pipe';
import { TomanPipe } from '../../../../pipes/toman.pipe';
import { CancelOrderComponent } from '../cancel-order/cancel-order.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [ButtonComponent, EnumPipe, TomanPipe],
})
export class OrderDetailsComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<OrderDetailsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  dialog = inject(MatDialog);

  constructor() {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancelOrder() {
    const dialogRef = this.dialog.open(CancelOrderComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
      }
    });
  }
}
