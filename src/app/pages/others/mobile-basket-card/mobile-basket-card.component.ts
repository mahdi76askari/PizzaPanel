import { Component, OnInit } from '@angular/core';
import { BasketCardComponent } from '../../../components/blocks/basket-card/basket-card.component';

@Component({
  selector: 'app-mobile-basket-card',
  standalone: true,
  templateUrl: './mobile-basket-card.component.html',
  styleUrls: ['./mobile-basket-card.component.css'],
  imports: [BasketCardComponent],
})
export class MobileBasketCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
