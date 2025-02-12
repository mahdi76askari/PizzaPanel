import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  api = 'AdminDashboard';

  constructor(private motherService: MotherService) {}

  getDashboard() {
    return this.motherService.get(this.api + '/get-Admin-Dashboard-Data');
  }
  getOrders(param: string) {
    return this.motherService.get(this.api + '/get-All-Orders' + param);
  }

  getUsers(param: string) {
    return this.motherService.get(this.api + '/getUsers' + param);
  }

  newAddress(body: any) {
    return this.motherService.post(this.api + '/AddAddress', body);
  }
  newUser(body: any) {
    return this.motherService.post(this.api + '/create-user-by-admin', body);
  }
  updateUser(body: any) {
    return this.motherService.put(this.api + '/update-user-by-admin', body);
  }
  assignRole(body: any) {
    return this.motherService.post(this.api + '/assign-role', body);
  }
}
