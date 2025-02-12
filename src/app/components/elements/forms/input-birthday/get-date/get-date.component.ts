import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../button/button/button.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-date',
  standalone: true,
  templateUrl: './get-date.component.html',
  styleUrls: ['./get-date.component.css'],
  imports: [ButtonComponent, FormsModule],
})
export class GetDateComponent implements OnInit {
  year: any = [];
  month: any = [];
  day: any = [];

  selectedDay = 1;
  selectedMonth = '01';
  selectedYear = 1365;

  dialogRef = inject(MatDialogRef<GetDateComponent>);

  constructor() {}

  ngOnInit() {
    this.year = this.generateNumberArray(1320, 1400);
    this.month = this.genMonths();
    this.day = this.genDays(this.selectedMonth);
  }

  submit() {
    this.dialogRef.close(
      `${this.selectedYear}/${this.selectedMonth}/${this.selectedDay}`
    );
  }

  generateNumberArray(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  genMonths() {
    return [
      {
        name: 'فروردین',
        value: '01',
      },
      {
        name: 'اردیبهشت',
        value: '02',
      },
      {
        name: 'خرداد',
        value: '03',
      },
      {
        name: 'تیر',
        value: '04',
      },
      {
        name: 'مرداد',
        value: '05',
      },
      {
        name: 'شهریور',
        value: '06',
      },
      {
        name: 'مهر',
        value: '07',
      },
      {
        name: 'آبان',
        value: '08',
      },
      {
        name: 'آذر',
        value: '09',
      },
      {
        name: 'دی',
        value: '10',
      },
      {
        name: 'بهمن',
        value: '11',
      },
      {
        name: 'اسفند',
        value: '12',
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
