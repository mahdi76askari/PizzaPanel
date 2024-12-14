import { Component } from '@angular/core';
import { IconComponent } from '../../components/elements/fonts/icon/icon.component';
import { ReportSummeryComponent } from '../../components/blocks/report-summery/report-summery.component';
import { IReportSummery } from '../../interfaces/IReportSummery';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReportSummeryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  reportSummery: IReportSummery[] = [
    { title: 'سفارش ها', amount: 200, change: 20 },
    { title: 'جمع پرداختی', amount: 200, change: -20 },
    { title: 'سفارش لغو شده', amount: 200, change: 20 },
    { title: 'شعب فعال', amount: 30, change: 0 },
  ];
}
