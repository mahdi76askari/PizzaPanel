import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css'],
})
export class AddPlanComponent implements OnInit {
  form = new FormGroup({
    planName: new FormControl(),
    selectedAreaPolygon: new FormControl(),
    deliveryFee: new FormControl(),
    guaranteeReturnTimeHalf: new FormControl(),
    guaranteeReturnTimeFull: new FormControl(),
    planPrice: new FormControl(),
    durationInMonths: new FormControl(),
  });
  constructor() {}

  ngOnInit() {}
}
