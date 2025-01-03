import { Injectable, signal } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  api = 'ProductGroup';

  allGroups = signal([]);

  constructor(private motherService: MotherService) {}

  setGroups() {
    this.motherService.get(this.api).subscribe({
      next: (v: any) => {
        this.allGroups.set(v.data);
      },
    });
  }

  getGroups(param: string) {
    return this.motherService.get(this.api + param);
  }
  getGroup(id: string | number) {
    return this.motherService.get(this.api + '/' + `${id}`);
  }
}
