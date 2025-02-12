import { Component, effect, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../../components/elements/forms/title/title.component';
import { TomanPipe } from '../../../../../pipes/toman.pipe';
import { BasketService } from '../../../../../services/http/basket.service';
import { ButtonComponent } from '../../../../../components/elements/button/button/button.component';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
  imports: [TitleComponent, TomanPipe, ButtonComponent],
})
export class PaymentDetailsComponent implements OnInit {
  basket: any;

  constructor(private basketService: BasketService) {
    this.basketService.getCart('');
    effect(() => {
      this.basket = basketService.basket();
    });
  }

  ngOnInit() {}

  payment() {}
}
