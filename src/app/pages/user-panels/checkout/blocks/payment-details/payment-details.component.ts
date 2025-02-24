import {
  Component,
  effect,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { TitleComponent } from '../../../../../components/elements/forms/title/title.component';
import { TomanPipe } from '../../../../../pipes/toman.pipe';
import { BasketService } from '../../../../../services/http/basket.service';
import { ButtonComponent } from '../../../../../components/elements/button/button/button.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
  imports: [TitleComponent, TomanPipe, ButtonComponent],
})
export class PaymentDetailsComponent implements OnInit {
  basket: any;
  @Output() payment = new EventEmitter();

  matDialog = inject(MatDialog);
  constructor(private basketService: BasketService) {
    this.basketService.getCart('');
    effect(() => {
      this.basket = basketService.basket();
    });
  }

  ngOnInit() {}
}
