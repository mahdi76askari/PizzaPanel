import { Injectable } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  api = 'Brand';

  constructor(private motherService: MotherService) {}

  getBrands(param: string) {
    return this.motherService.get(this.api + param);
  }
  getBrand(param: string) {
    return this.motherService.get(this.api + param);
  }
  newBrand(param: string, body: any) {
    return this.motherService.post(this.api + param, body);
  }
  updateBrand(param: string, body: any) {
    return this.motherService.put(this.api + '/' + param, body);
  }
  deleteBrand(param: string) {
    return this.motherService.delete(this.api + '/' + param);
  }
}
