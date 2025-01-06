import { Component, inject, Input, OnInit } from '@angular/core';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { EnumPipe } from '../../../pipes/enum.pipe';

import jalaali from 'jalaali-js';

@Component({
  selector: 'app-order-row',
  standalone: true,
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.css'],
  imports: [ButtonComponent, EnumPipe],
})
export class OrderRowComponent implements OnInit {
  dialog = inject(MatDialog);
  @Input() order: any;
  constructor() {}

  ngOnInit() {
    console.log(this.order);
  }

  details() {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      data: this.order,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }

  timeDiff(targetDateStr: string) {
    // Parse the target date string (assuming it's in the format YYYY/MM/DD HH:mm:ss)
    const targetDateParts = targetDateStr.split(' ');
    const dateParts = targetDateParts[0].split('/');
    const timeParts = targetDateParts[1].split(':');

    console.log(dateParts);

    console.log(
      jalaali.toGregorian(
        Number(dateParts[0]),
        Number(dateParts[1]),
        Number(dateParts[2])
      )
    );

    const miladi = jalaali.toGregorian(
      Number(dateParts[0]),
      Number(dateParts[1]),
      Number(dateParts[2])
    );

    const target = new Date(`${miladi.gy}/${miladi.gm}/${miladi.gd}`);
    console.log(target);
    const now = new Date();

    const diff = now.getTime() - target.getTime();
    console.log(diff / 1000 / 60);
    return (diff / 1000 / 60).toFixed(0);
  }
}
