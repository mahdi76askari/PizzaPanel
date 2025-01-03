import { afterRender, Injectable, signal, WritableSignal } from '@angular/core';
import { MotherService } from './mother.service';
import { ISendOtp } from '../../interfaces/dto/ISendOtp';
import { IVerifyOtp } from '../../interfaces/dto/IVerifyOtp';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  isLogin: WritableSignal<boolean> = signal(false);
  requestLogin: WritableSignal<boolean> = signal(false);

  api = 'Account';

  constructor(private motherService: MotherService) {
    afterRender(() => {
      if (localStorage.getItem('token')) {
        this.isLogin.set(true);
      }
    });
  }

  sendOtp(body: ISendOtp) {
    return this.motherService.post(this.api + '/send-otp', body);
  }

  verifyOtp(body: IVerifyOtp) {
    return this.motherService.post(this.api + '/verify-otp', body);
  }

  getProfile() {
    return this.motherService.get(this.api + '/profile');
  }
  getOrderTrack(param: any) {
    return this.motherService.get(this.api + '/track-order/' + param);
  }
  getUserOrders(param: string) {
    return this.motherService.get(this.api + '/get-User-Orders' + param);
  }
  updateProfile(body: any) {
    return this.motherService.put(this.api + '/update-user', body);
  }
  cancelOrder(body: any) {
    return this.motherService.put(this.api + '/cancel-order', body);
  }

  assignAddress(body: any) {
    return this.motherService.post(this.api + '/assign-address', body);
  }
}
