import { Component, effect, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../../services/http/basket.service';
import { OrderService } from '../../../services/http/order.service';
import { AlertService } from '../../../services/tools/alert.service';
import { BasketCardComponent } from '../../../components/blocks/basket-card/basket-card.component';
import { AddressesComponent } from '../addresses/addresses.component';
import { TitleComponent } from '../../../components/elements/forms/title/title.component';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentCheckComponent } from './blocks/payment-check/payment-check.component';
import { InputTimeComponent } from '../../../components/elements/forms/input-time/input-time.component';
import { SettingService } from '../../../services/http/setting.service';
import { TomanPipe } from '../../../pipes/toman.pipe';
import { PaymentDetailsComponent } from './blocks/payment-details/payment-details.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    BasketCardComponent,
    AddressesComponent,
    TitleComponent,
    InputTextComponent,
    PaymentCheckComponent,
    InputTimeComponent,
    TomanPipe,
    PaymentDetailsComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  basket: any;
  shoppingCartItems: any = [];
  paymentMethod: any = 0;
  formGroup = new FormGroup({
    discountCode: new FormControl(''),
    clock: new FormControl(''),
  });

  sendTime: any = null;
  sendMode = 0;

  cartConfig: any;

  constructor(
    private basketService: BasketService,
    private orderService: OrderService,
    private router: Router,
    private alertService: AlertService,
    private settingService: SettingService
  ) {
    effect(() => {
      this.basket = basketService.basket();
      if (this.basket.shoppingCartItems)
        this.shoppingCartItems = this.basket.shoppingCartItems;
    });
  }

  ngOnInit() {
    this.getConfig();
  }

  createOrder() {
    const body = {
      shoppingCartId: this.basket.shoppingCartId,
      paymentMethod: this.paymentMethod,
      deliveryTimeSlot: null,
      discountCodeId: null,
    };
    this.orderService.newOrder('', body).subscribe({
      next: (v: any) => {
        this.basketService.getCart('');
        this.router.navigateByUrl('/orders');
      },
      error: (e: any) => {
        this.alertService.error({
          title: 'خطایی رخ داده',
          msg: e.error.message,
        });
      },
    });
  }

  selectMethod(value: number) {
    this.paymentMethod = value;
  }
  setTime(value: any) {
    if (value == null) {
      this.sendTime = value;
      this.sendMode = 0;
    } else if (value == 1) {
      this.sendTime = 'فردا ' + this.sendTime;
      this.sendMode = 1;
    } else {
      this.sendTime = 'امروز ' + this.sendTime;
      this.sendMode = 2;
    }
  }

  getConfig() {
    this.settingService.getCartConfig('').subscribe({
      next: (v: any) => {
        this.cartConfig = JSON.parse(v.data.value);
        console.log(this.cartConfig);
      },
      error: (e: any) => {},
    });
  }
}
