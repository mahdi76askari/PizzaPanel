import { afterRender, Component, inject, OnInit } from '@angular/core';
import { DotLottie } from '@lottiefiles/dotlottie-web';
import { TitleComponent } from '../../../components/elements/forms/title/title.component';
import { AccountService } from '../../../services/http/account.service';
import { EnumPipe } from '../../../pipes/enum.pipe';
import { TomanPipe } from '../../../pipes/toman.pipe';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { OrderDetailsComponent } from '../../../components/blocks/order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [TitleComponent, EnumPipe, TomanPipe, ButtonComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  dotLottie: any;
  orders: any;

  dialog = inject(MatDialog);

  constructor(private accountService: AccountService) {
    afterRender(() => {
      if (!this.dotLottie && this.orders) {
        this.dotLottie = new DotLottie({
          autoplay: true,
          loop: true,
          canvas: document.querySelector('#dotlottie-canvas')!,
          src: 'lottie/cooking.lottie',
        });
      }
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const param = `?sortOption=newest&pageSize=1&pageNumber=1&orderStatuses[]=0&orderStatuses[]=1&orderStatuses[]=2&orderStatuses[]=3&orderStatuses[]=4`;

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
