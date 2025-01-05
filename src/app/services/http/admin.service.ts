import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  api = 'AdminDashboard';

  constructor(private motherService: MotherService) {}

  getOrders(param: string) {
    return this.motherService.get(this.api + '/get-All-Orders' + param);
  }

  newAddress(body: any) {
    return this.motherService.post(this.api + '/AddAddress', body);
  }
}
