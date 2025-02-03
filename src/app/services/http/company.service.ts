import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  api = 'Company';

  constructor(private motherService: MotherService) {}

  getCompanies(param: string) {
    return this.motherService.get(this.api + param);
  }
  getCompany(param: string) {
    return this.motherService.get(this.api + param);
  }
  newCompany(param: string, body: any) {
    return this.motherService.post(this.api + param, body);
  }
  updateCompany(param: string, body: any) {
    return this.motherService.put(this.api + '/' + param, body);
  }
  deleteCompany(param: string) {
    return this.motherService.delete(this.api + '/' + param);
  }
}
