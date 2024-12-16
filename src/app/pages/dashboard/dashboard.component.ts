import { Component } from '@angular/core';
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
    { title: 'سفارش ها', amount: 200, change: 20, icon: 'pi-cart-arrow-down' },
    { title: 'جمع پرداختی', amount: 200, change: -20, icon: 'pi-dollar' },
    {
      title: 'سفارش لغو شده',
      amount: 200,
      change: 20,
      icon: 'pi-shopping-cart',
    },
    { title: 'شعب فعال', amount: 30, change: 0, icon: 'pi-building-columns' },
  ];
}
