import { Component, inject, OnInit } from '@angular/core';
import { TitleComponent } from '../../../components/elements/forms/title/title.component';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { AccountService } from '../../../services/http/account.service';
import { AlertService } from '../../../services/tools/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyComponent } from './buy/buy.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  imports: [TitleComponent, ButtonComponent, RouterModule],
})
export class PlansComponent implements OnInit {
  dialog = inject(MatDialog);
  data: any;

  constructor(
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    this.accountService.getProfile().subscribe({
      next: (v: any) => {
        this.data = v.data;
      },
    });
  }

  buy() {
    this.dialog
      .open(BuyComponent)
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getProfile();
        },
      });
  }
}
