import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../button/button/button.component';

@Component({
  selector: 'app-get-date',
  standalone: true,
  templateUrl: './get-date.component.html',
  styleUrls: ['./get-date.component.css'],
  imports: [ButtonComponent],
})
export class GetDateComponent implements OnInit {
  year: any = [];
  month: any = [];
  day: any = [];

  selectedDay = 1;
  selectedMonth = 1;
  selectedYear = 1365;

  constructor() {}

  ngOnInit() {
    this.year = this.generateNumberArray(1320, 1400);
    this.month = this.genMonths();
    this.day = this.genDays(this.selectedMonth);
  }

  submit() {}

  generateNumberArray(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  genMonths() {
    return [
      {
        name: 'فروردین',
        value: 1,
      },
      {
        name: 'اردیبهشت',
        value: 2,
      },
      {
        name: 'خرداد',
        value: 3,
      },
      {
        name: 'تیر',
        value: 4,
      },
      {
        name: 'مرداد',
        value: 5,
      },
      {
        name: 'شهریور',
        value: 6,
      },
      {
        name: 'مهر',
        value: 7,
      },
      {
        name: 'آبان',
        value: 8,
      },
      {
        name: 'آذر',
        value: 9,
      },
      {
        name: 'دی',
        value: 10,
      },
      {
        name: 'بهمن',
        value: 11,
      },
      {
        name: 'اسفند',
        value: 12,
      },
    ];
  }

  genDays(month: any) {
    let until = 31;
    if (month > 6) {
      until = 30;
    } else if (month === 12) {
      until = 29;
    }
    return this.generateNumberArray(1, until);
  }
}
