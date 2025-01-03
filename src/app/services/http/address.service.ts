import { Injectable, signal, WritableSignal } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  isLogin: WritableSignal<boolean> = signal(false);

  api = 'Address';

  constructor(private motherService: MotherService) {}

  getAddress() {
    return this.motherService.get(this.api + '/GetUserAddresses');
  }

  newAddress(body: any) {
    return this.motherService.post(this.api + '/AddAddress', body);
  }

  updateAddress(param: string, body: any) {
    return this.motherService.post(this.api + '/AddAddress' + param, body);
  }

  deleteAddress(param: any) {
    return this.motherService.delete(this.api + '/DeleteAddress/' + param);
  }
}
