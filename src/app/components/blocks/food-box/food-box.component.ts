import { Component, effect, Input } from '@angular/core';
import { BasketService } from '../../../services/http/basket.service';
import { ButtonComponent } from '../../elements/button/button/button.component';
import { CommonModule } from '@angular/common';
import { TomanPipe } from '../../../pipes/toman.pipe';
import { AccountService } from '../../../services/http/account.service';

@Component({
  selector: 'app-food-box',
  standalone: true,
  imports: [ButtonComponent, CommonModule, TomanPipe],
  templateUrl: './food-box.component.html',
  styleUrl: './food-box.component.scss',
})
export class FoodBoxComponent {
  @Input() item: any = {};

  basket: any;
  shoppingCartItems: any = [];

  isLogin = false;

  loading = false;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {
    effect(() => {
      this.basket = basketService.basket();
      if (this.basket.shoppingCartItems)
        this.shoppingCartItems = this.basket.shoppingCartItems;

      this.isLogin = accountService.isLogin();
    });
  }

  updateBasket(quantity: number) {
    if (quantity == 0) {
      this.removeItem(this.item.id);
    } else {
      this.changeQuantity(quantity);
    }
  }

  addToCart(quantity: number) {
    this.loading = true;
    const body = {
      productId: this.item.productId,
      quantity: quantity,
    };
    this.basketService.addToCart('', body).subscribe({
      next: (v: any) => {
        this.basketService.getCart('');
        this.loading = false;
      },
    });
  }

  changeQuantity(quantity: number): void {
    this.basketService
      .updateQuantity('', {
        cartItemId: this.item.shoppingCartItemId,
        quantity: quantity,
      })
      .subscribe({
        next: (v: any) => {
          this.basketService.getCart('');
        },
      });
  }

  removeItem(itemId: number): void {
    this.basketService.removeCartItem(itemId.toString()).subscribe({
      next: (v: any) => {},
    });
  }

  checkExistOnCart(item: any): boolean {
    const productId = item.productId;
    const obj = this.shoppingCartItems.find(
      (obj: any) => obj.productId === productId
    );
    if (obj) {
      this.item.quantity = obj.quantity;
      this.item.shoppingCartItemId = obj.shoppingCartItemId;
      return true;
    } else {
      return false;
    }
  }
}
