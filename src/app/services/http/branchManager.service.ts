import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class BranchManagerService {
  api = 'BranchManagerDashboard';

  constructor(private motherService: MotherService) {}

  getOrders(param: string) {
    return this.motherService.get(this.api + '/get-branch-orders' + param);
  }

  updateStatus(body: any) {
    return this.motherService.put(this.api + '/update-status', body);
  }
  updateTimes(body: any) {
    return this.motherService.put(
      this.api + '/adjust-Order-Processing-Times',
      body
    );
  }
}
