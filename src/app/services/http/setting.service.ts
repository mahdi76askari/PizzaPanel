import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  api = 'Setting';

  constructor(private motherService: MotherService) {}

  getSetting(param: string) {
    return this.motherService.get(this.api + param);
  }

  getCartConfig(param: string) {
    return this.motherService.get(this.api + '/orderCart-config' + param);
  }

  updateSetting(param: string, body: any) {
    return this.motherService.put(this.api + '/UpdateValue' + param, body);
  }
}
