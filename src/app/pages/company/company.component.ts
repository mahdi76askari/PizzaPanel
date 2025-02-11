import { Component, inject, OnInit } from '@angular/core';
import { CompanyService } from '../../services/http/company.service';
import { ButtonComponent } from '../../components/elements/button/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AddCompanyComponent } from './add-company/add-company.component';
import { RemoveCompanyComponent } from './remove-company/remove-company.component';

@Component({
  selector: 'app-company',
  standalone: true,
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  imports: [ButtonComponent, MatPaginatorModule, MatTableModule],
})
export class CompanyComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'name', 'action'];
  transactions: any[] = [];

  total: number = 0;
  pageSize: number = 25;
  pageNumber: number = 1;

  loading = false;

  companies: any = [];

  dialog = inject(MatDialog);
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    let param = `?pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`;
    this.companyService.getCompanies(param).subscribe({
      next: (v: any) => {
        this.companies = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }

  pagination(event: any) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getCompanies();
  }

  add() {
    this.dialog
      .open(AddCompanyComponent)
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getCompanies();
        },
      });
  }

  edit(user: any) {
    this.dialog
      .open(AddCompanyComponent, { data: { company: user } })
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getCompanies();
        },
      });
  }

  remove(id: any) {
    this.dialog
      .open(RemoveCompanyComponent, { data: { companyId: id } })
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getCompanies();
        },
      });
  }
}
