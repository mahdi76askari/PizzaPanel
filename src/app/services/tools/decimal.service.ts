import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DecimalFormatService {
  private decimalPipe = new DecimalPipe('en-US');

  format(value: any, digits?: string): string | null {
    return this.decimalPipe.transform(value, digits);
  }
}
