import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  date = '';
  time: any;
  day = '';

  ngOnInit(): void {
    setInterval(() => {
      this.updatePersianDate();
    }, 1000);
  }

  updatePersianDate() {
    const now = new Date();
    this.day = this.dayFinder(now.getDay());
    this.date = now.toLocaleDateString('fa-IR');
    this.time =
      now.getHours() +
      ':' +
      now.getMinutes() +
      ':' +
      ('0' + now.getSeconds()).slice(-2);
  }

  dayFinder(val: number) {
    const weekday = [
      'یک شنبه',
      'دوشنبه',
      'سه شنبه',
      'چهارشنبه',
      'پنجشنبه',
      'جمعه',
      'شنبه',
    ];
    return weekday[val];
  }
}
