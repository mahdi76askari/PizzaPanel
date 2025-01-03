import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api = 'Product';
  constructor(private motherService: MotherService) {}

  getProducts(param: string) {
    return this.motherService.get(this.api + param);
  }
  getProduct(id: string | number) {
    return this.motherService.get(this.api + '/' + `${id}`);
  }
}
