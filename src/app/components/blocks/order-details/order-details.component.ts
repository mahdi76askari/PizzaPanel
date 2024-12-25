import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button/button.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [ButtonComponent],
})
export class OrderDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
