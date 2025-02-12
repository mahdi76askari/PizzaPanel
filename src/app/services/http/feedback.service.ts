import { Injectable, signal, WritableSignal } from '@angular/core';
import { MotherService } from './mother.service';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  api = 'Feedback';

  constructor(private motherService: MotherService) {}

  newComplaint(param: string, body: any) {
    return this.motherService.post(this.api + '/complaint' + param, body);
  }
  newSuggestion(param: string, body: any) {
    return this.motherService.post(this.api + '/suggestion' + param, body);
  }
}
