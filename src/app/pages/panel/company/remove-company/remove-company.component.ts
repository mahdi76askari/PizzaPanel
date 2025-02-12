import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyService } from '../../../../services/http/company.service';
import { AlertService } from '../../../../services/tools/alert.service';

@Component({
  selector: 'app-remove-company',
  standalone: true,
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css'],
  imports: [ButtonComponent],
})
export class RemoveCompanyComponent implements OnInit {
  dialogRef = inject(MatDialogRef<RemoveCompanyComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  constructor(
    private companyService: CompanyService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  remove() {
    this.companyService.deleteCompany(this.data.companyId).subscribe({
      next: (v: any) => {
        this.alertService.success({ title: 'شرکت مورد نظر حذف شد', msg: '' });
        this.dialogRef.close();
      },
    });
  }

  close() {
    this.dialogRef.close();
  }
}
