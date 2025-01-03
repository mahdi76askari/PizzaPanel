import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  api = 'AdminDashboard/';

  constructor(private motherService: MotherService) {}

  updateProductGroup() {
    return this.motherService.get(this.api + 'update-product-groups');
  }
  updateProduct() {
    return this.motherService.get(this.api + 'update-product');
  }
  updateProductRemain() {
    return this.motherService.get(this.api + 'update-product-remain');
  }
}
