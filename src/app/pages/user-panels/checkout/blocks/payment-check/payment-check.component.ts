import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-payment-check',
  standalone: true,
  templateUrl: './payment-check.component.html',
  styleUrls: ['./payment-check.component.css'],
})
export class PaymentCheckComponent implements OnInit, OnChanges {
  @Input() idx: number = 0;
  @Input() paymentMethod: number = 0;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
