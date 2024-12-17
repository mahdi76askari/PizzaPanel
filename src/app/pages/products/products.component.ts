import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductBoxComponent } from '../../components/blocks/product-box/product-box.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductBoxComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  filter = '1';

  selectFilter(value: string) {
    this.filter = value;
  }
}
