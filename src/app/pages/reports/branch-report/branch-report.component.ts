import { Component } from '@angular/core';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import { InputBirthdayComponent } from '../../../components/elements/forms/date-picker/date-picker.component';

@Component({
  selector: 'app-branch-report',
  standalone: true,
  imports: [SelectComponent, InputBirthdayComponent],
  templateUrl: './branch-report.component.html',
  styleUrl: './branch-report.component.scss',
})
export class BranchReportComponent {}
