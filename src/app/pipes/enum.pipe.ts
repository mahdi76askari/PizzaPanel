import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum',
  standalone: true,
})
export class EnumPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let result = value;
    switch (value) {
      case 'Initial':
        result = 'در انتظار تایید شعبه';
        break;
      case 'ApprovedByBranch':
        result = 'توسط شعبه تایید شده است. ';
        break;
      case 'Preparing':
        result = 'در حال آماده سازی ';
        break;
      case 'OutForDelivery':
        result = 'در حال ارسال توسط پیک ';
        break;
      case 'Delivered':
        result = ' تحویل داده شده';
        break;
      case 'CanceledByCustomer':
        result = 'لغو شده توسط مشتری';
        break;
      case 'CanceledByAdmin':
        result = 'لغو شده توسط مدیر سامانه ';
        break;

      default:
        break;
    }
    return result;
  }
}
