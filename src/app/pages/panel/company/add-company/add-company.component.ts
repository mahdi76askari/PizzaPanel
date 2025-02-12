import { Component, inject, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../../components/elements/forms/input-text/input-text.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../../../components/elements/button/button/button.component';
import { CompanyService } from '../../../../services/http/company.service';
import { AlertService } from '../../../../services/tools/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-company',
  standalone: true,

  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
  imports: [InputTextComponent, ButtonComponent],
})
export class AddCompanyComponent implements OnInit {
  name = new FormControl('');

  mode: string = 'add';

  dialogRef = inject(MatDialogRef<AddCompanyComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  constructor(
    private companyService: CompanyService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    if (this.data && this.data.company) {
      this.mode = 'edit';
      this.patchData();
    }
  }

  patchData() {
    this.name.patchValue(this.data.company.name);
  }

  add() {
    let body: any = {
      name: this.name.value,
    };

    if (this.mode == 'edit') {
      this.companyService
        .updateCompany(this.data.company.companyId, body)
        .subscribe({
          next: (v: any) => {
            this.name.reset();
            this.alertService.success({ title: 'نام شرکت ویرایش شد', msg: '' });
            this.dialogRef.close();
          },
        });
    } else {
      this.companyService.newCompany('', body).subscribe({
        next: (v: any) => {
          this.name.reset();
          this.alertService.success({ title: 'شرکت جدید اضافه شد', msg: '' });
        },
      });
    }
  }
}
