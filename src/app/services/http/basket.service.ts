import { Injectable, signal, WritableSignal } from '@angular/core';
import { IBasketCard } from '../../interfaces/IBasketCard';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: WritableSignal<IBasketCard[]> = signal([]);
  openBasket: WritableSignal<boolean> = signal(false);
  api = 'ShoppingCart';

  constructor(private motherService: MotherService) {}

  getCart(param: string) {
    this.motherService.get(this.api + param).subscribe({
      next: (v: any) => {
        this.basket.set(v.data);
      },
    });
  }
  addToCart(param: string, body: any) {
    return this.motherService.post(this.api + '/add' + param, body);
  }
  removeCartItem(param: string) {
    return this.motherService.delete(this.api + '/remove-item/' + param);
  }
  updateQuantity(param: string, body: any) {
    return this.motherService.put(this.api + '/update-quantity' + param, body);
  }
  clearCart(param: string) {
    return this.motherService.delete(this.api + param);
  }

  checkout() {
    return this.motherService.post(this.api + '/checkout');
  }

  deliveryTimes() {
    return this.motherService.get(this.api + '/delivery-times');
  }
}
