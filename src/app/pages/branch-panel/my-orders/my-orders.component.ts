import { Component, inject } from '@angular/core';
import { BranchManagerService } from '../../../services/http/branchManager.service';
import { AlertService } from '../../../services/tools/alert.service';
import { EnumPipe } from '../../../pipes/enum.pipe';
import { OrderStatusDirective } from '../../../directives/order-status.directive';
import { ShamsiTimePipe } from '../../../pipes/shamsi-time.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [EnumPipe, OrderStatusDirective, ShamsiTimePipe],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
})
export class MyOrdersComponent {
  orders: any[] = [];

  dialog = inject(MatDialog);
  constructor(
    private bmService: BranchManagerService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.bmService.getOrders('').subscribe({
      next: (v: any) => {
        this.orders = v.data;
      },
    });
  }

  openDetails(id: any) {
    this.dialog
      .open(DetailsComponent, { data: { id: id } })
      .afterClosed()
      .subscribe({
        next: () => {
          this.getOrders();
        },
      });
  }
}
