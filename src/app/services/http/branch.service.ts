import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  api = 'Branch';

  constructor(private motherService: MotherService) {}

  getBranches(param: string) {
    return this.motherService.get(this.api + param);
  }

  newBranch(body: any) {
    return this.motherService.post(this.api + '/verify-otp', body);
  }
}
