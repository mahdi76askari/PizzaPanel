import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  api = 'Plan';

  constructor(private motherService: MotherService) {}

  getPlans(param: string) {
    return this.motherService.get(this.api + param);
  }
  getPlan(param: string) {
    return this.motherService.get(this.api + '/' + param);
  }
  newPlan(body: any) {
    return this.motherService.post(this.api, body);
  }
  updatePlan(param: string, body: any) {
    return this.motherService.put(this.api + '/' + param, body);
  }
}
