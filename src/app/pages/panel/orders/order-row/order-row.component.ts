import { Component, inject, Input, OnInit } from '@angular/core';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { EnumPipe } from '../../../../pipes/enum.pipe';

import jalaali from 'jalaali-js';
import { TomanPipe } from '../../../../pipes/toman.pipe';
import { OrderStatusDirective } from '../../../../directives/order-status.directive';

@Component({
  selector: 'app-order-row',
  standalone: true,
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.css'],
  imports: [ButtonComponent, EnumPipe, TomanPipe, OrderStatusDirective],
})
export class OrderRowComponent implements OnInit {
  dialog = inject(MatDialog);
  @Input() order: any;
  constructor() {}

  ngOnInit() {
    // console.log(this.order);
  }

  details() {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      data: this.order,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
      }
    });
  }

  timeDiff(targetDateStr: string) {
    // Parse the target date string (assuming it's in the format YYYY/MM/DD HH:mm:ss)
    const targetDateParts = targetDateStr.split(' ');
    const dateParts = targetDateParts[0].split('/');
    const timeParts = targetDateParts[1].split(':');

    const miladi = jalaali.toGregorian(
      Number(dateParts[0]),
      Number(dateParts[1]),
      Number(dateParts[2])
    );

    const target = new Date(
      `${miladi.gy}/${miladi.gm}/${miladi.gd} ${timeParts[0]}:${timeParts[1]}`
    );
    // console.log(target);
    const now = new Date();
    // console.log(now);

    const diff = now.getTime() - target.getTime();
    // console.log(diff / 1000 / 60);
    return (diff / 1000 / 60).toFixed(0);
  }
}
