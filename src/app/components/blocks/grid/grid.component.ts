import { Component, Input, OnInit } from '@angular/core';
import { FoodBoxComponent } from '../food-box/food-box.component';
import { ProductService } from '../../../services/http/product.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FoodBoxComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() title: string = '';
  @Input() groupId: any[] = [];

  products: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    const param = `?productGroupId=${this.groupId}`;
    this.productService.getProducts(param).subscribe({
      next: (v: any) => {
        this.products = v.data;
      },
    });
  }
}
