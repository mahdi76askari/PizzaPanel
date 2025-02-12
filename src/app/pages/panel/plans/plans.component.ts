import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { PlansService } from '../../../services/http/plans.service';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { TomanPipe } from '../../../pipes/toman.pipe';

@Component({
  selector: 'app-plans',
  standalone: true,
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  imports: [ButtonComponent, RouterModule, TomanPipe],
})
export class PlansComponent implements OnInit {
  plans: any = [];
  loading = false;

  dialog = inject(MatDialog);
  constructor(private plansService: PlansService) {}

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.loading = true;
    this.plans = [];
    const param = '';
    this.plansService.getPlans(param).subscribe({
      next: (v: any) => {
        this.plans = v.data;
        this.loading = false;
      },
    });
  }
}
