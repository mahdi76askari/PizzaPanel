import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/elements/button/button/button.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  filter = '1';

  selectFilter(value: string) {
    this.filter = value;
  }
}
