import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/elements/button/button/button.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../../components/blocks/order-details/order-details.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  filter = '1';

  dialog = inject(MatDialog);

  selectFilter(value: string) {
    this.filter = value;
  }

  details() {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}
