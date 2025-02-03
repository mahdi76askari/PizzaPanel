import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { CompanyService } from '../../../services/http/company.service';
import { AlertService } from '../../../services/tools/alert.service';

@Component({
  selector: 'app-add-company',
  standalone: true,

  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
  imports: [InputTextComponent, ButtonComponent],
})
export class AddCompanyComponent implements OnInit {
  name = new FormControl('');
  constructor(
    private companyService: CompanyService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  add() {
    let body: any = {
      name: this.name.value,
    };

    this.companyService.newCompany('', body).subscribe({
      next: (v: any) => {
        this.name.reset();
        this.alertService.success({ title: 'شرکت جدید اضافه شد', msg: '' });
      },
    });
  }
}
