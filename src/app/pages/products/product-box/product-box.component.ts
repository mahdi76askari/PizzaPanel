import { Component, Input } from '@angular/core';
import { TomanPipe } from '../../../pipes/toman.pipe';

@Component({
  selector: 'a-product-box',
  standalone: true,
  imports: [TomanPipe],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss',
})
export class ProductBoxComponent {
  @Input() product: any;
}
