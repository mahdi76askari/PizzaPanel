import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  api = 'Order';

  constructor(private motherService: MotherService) {}

  getOrders(param: string) {
    return this.motherService.get(this.api + param);
  }
  getOrder(param: string) {
    return this.motherService.get(this.api + '/' + param);
  }
  newOrder(param: string, body: any) {
    return this.motherService.post(this.api + param, body);
  }
  updateOrder(param: string, body: any) {
    return this.motherService.put(this.api + '/update-status', body);
  }
}
