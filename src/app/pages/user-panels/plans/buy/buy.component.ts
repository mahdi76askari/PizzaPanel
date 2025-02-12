import { Component, inject, OnInit } from '@angular/core';
import { PlansService } from '../../../../services/http/plans.service';
import { TomanPipe } from '../../../../pipes/toman.pipe';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [TomanPipe],
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  plans: any = [];
  constructor(private planService: PlansService) {}

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.planService.getPlans('').subscribe({
      next: (v: any) => {
        this.plans = v.data;
      },
    });
  }
}
