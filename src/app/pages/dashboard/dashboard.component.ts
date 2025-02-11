import { Component } from '@angular/core';
import { ReportSummeryComponent } from '../../components/blocks/report-summery/report-summery.component';
import { IReportSummery } from '../../interfaces/IReportSummery';
import { AdminService } from '../../services/http/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReportSummeryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  reportSummery: IReportSummery[] = [
    { title: 'سفارش ها', amount: 0, change: 0, icon: 'pi-cart-arrow-down' },
    { title: 'جمع پرداختی', amount: 0, change: 0, icon: 'pi-dollar' },
    {
      title: 'سفارش لغو شده',
      amount: 0,
      change: 0,
      icon: 'pi-shopping-cart',
    },
    { title: 'شعب فعال', amount: 0, change: 0, icon: 'pi-building-columns' },
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getDashboard();
  }

  getDashboard() {
    this.adminService.getDashboard().subscribe({
      next: (v: any) => {
        this.reportSummery[3].amount = v.data.activeBranches;
        this.reportSummery[2].amount = v.data.canceledOrders;
        this.reportSummery[2].change = v.data.canceledOrdersGrowth;

        this.reportSummery[1].amount = v.data.totalPayments;
        this.reportSummery[1].change = v.data.paymentsGrowth;

        this.reportSummery[0].amount = v.data.totalOrders;
        this.reportSummery[0].change = v.data.ordersGrowth;
      },
    });
  }
}
