import { Component, inject } from '@angular/core';

import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { TitleComponent } from '../../../components/elements/forms/title/title.component';
import { OrderService } from '../../../services/http/order.service';
import { AccountService } from '../../../services/http/account.service';
import { TomanPipe } from '../../../pipes/toman.pipe';
import { EnumPipe } from '../../../pipes/enum.pipe';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../../../components/blocks/order-details/order-details.component';

@Component({
  selector: 'app-orders-history',
  standalone: true,
  imports: [ButtonComponent, TitleComponent, TomanPipe, EnumPipe],
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.scss',
})
export class OrdersHistoryComponent {
  orders: any = [];

  dialog = inject(MatDialog);
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const param = `?sortOption=newest&pageSize=1&pageNumber=1&orderStatuses[]=5&orderStatuses[]=6`;

    this.accountService.getUserOrders(param).subscribe({
      next: (v: any) => {
        this.orders = v.data;
      },
    });
  }

  openDetail(id: any) {
    this.dialog.open(OrderDetailsComponent, {
      data: { id: id },
    });
  }
}
