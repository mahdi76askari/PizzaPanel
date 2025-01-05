import { Pipe, PipeTransform } from '@angular/core';
import { DecimalFormatService } from '../services/tools/decimal.service';

@Pipe({
  name: 'toman',
  standalone: true,
})
export class TomanPipe implements PipeTransform {
  constructor(private decimalFormatService: DecimalFormatService) {}
  transform(value: any, args?: any): any {
    if (value > 0) {
      return this.decimalFormatService.format(value, '3.');
    } else {
      return value;
    }
  }
}
