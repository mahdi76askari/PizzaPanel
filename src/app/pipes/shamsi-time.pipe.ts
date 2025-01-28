import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shamsiTime',
  standalone: true,
})
export class ShamsiTimePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.slice(11);
  }
}
