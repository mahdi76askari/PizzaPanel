import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button/button.component';
import { BasketService } from '../../../services/http/basket.service';

import { Router } from '@angular/router';
import { BasketItemComponent } from '../basket-item/basket-item.component';

interface BasketItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-basket-card',
  standalone: true,
  imports: [ButtonComponent, BasketItemComponent],
  templateUrl: './basket-card.component.html',
  styleUrl: './basket-card.component.scss',
})
export class BasketCardComponent {
  basket: any;
  shoppingCartItems: any = [];

  @Input() mode: 'payment' | 'checkout' = 'checkout';
  @Output() createOrder = new EventEmitter();

  constructor(private basketService: BasketService, private router: Router) {
    effect(() => {
      this.basket = basketService.basket();
      if (this.basket.shoppingCartItems)
        this.shoppingCartItems = this.basket.shoppingCartItems;
    });
  }

  ngOnInit() {
    this.basketService.getCart('');
  }

  checkout() {
    this.router.navigateByUrl('/checkout');
  }
  payment() {
    this.createOrder.emit();
  }
}
