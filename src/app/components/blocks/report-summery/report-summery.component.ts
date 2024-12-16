import { Component, Input } from '@angular/core';
import { IconComponent } from '../../elements/fonts/icon/icon.component';
import { IReportSummery } from '../../../interfaces/IReportSummery';

@Component({
  selector: 'a-report-summery',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './report-summery.component.html',
  styleUrl: './report-summery.component.scss',
})
export class ReportSummeryComponent {
  @Input() data: IReportSummery = {
    title: '',
    amount: 0,
    change: 0,
    icon: '',
  };

  getPositiveChange(value: number) {
    return Math.abs(value);
  }
}
