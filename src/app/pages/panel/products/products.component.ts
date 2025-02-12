import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductService } from '../../../services/http/product.service';
import { GroupService } from '../../../services/http/group.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductBoxComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  status = '0';

  productService = inject(ProductService);
  groupService = inject(GroupService);

  products: any;

  total: number = 0;
  pageSize: number = 30;
  pageNumber: number = 1;

  loading = false;

  groups: any;

  ngOnInit() {
    this.getProducts();
    this.getProductsGroup();
  }

  getProducts() {
    this.loading = true;
    let param = `?pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`;
    if (this.status != '0') {
      param += `&productGroupId=${this.status}`;
    }
    this.productService.getProducts(param).subscribe({
      next: (v: any) => {
        this.products = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }

  getProductsGroup() {
    this.loading = true;
    const param = `?isMainGroupOnly=true`;
    this.groupService.getGroups(param).subscribe({
      next: (v: any) => {
        this.groups = v.data;
        // this.total = v.meta.total;
        // this.pageSize = v.meta.pageSize;
        // this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }

  selectFilter(value: string) {
    this.status = value;

    this.getProducts();
  }
}
