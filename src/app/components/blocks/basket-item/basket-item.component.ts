import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button/button.component';
import { BasketService } from '../../../services/http/basket.service';
import { TomanPipe } from '../../../pipes/toman.pipe';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css'],
  imports: [ButtonComponent, TomanPipe],
})
export class BasketItemComponent implements OnInit {
  loading = false;

  @Input() item: any;
  constructor(private basketService: BasketService) {}

  ngOnInit() {}

  removeItem(itemId: number): void {
    this.loading = true;
    this.basketService.removeCartItem(itemId.toString()).subscribe({
      next: (v: any) => {
        this.basketService.getCart('');
        this.loading = false;
      },
    });
  }

  changeQuantity(itemId: number, quantity: number): void {
    this.basketService
      .updateQuantity('', { cartItemId: itemId, quantity: quantity })
      .subscribe({
        next: (v: any) => {
          this.basketService.getCart('');
        },
      });
  }
}
