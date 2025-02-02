import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-time-range',
  standalone: true,
  imports: [NgxMaskDirective, FormsModule],
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.css'],
})
export class TimeRangeComponent implements OnInit {
  @Input() title: any;
  @Input() from: any;
  @Output() fromChange = new EventEmitter();

  @Input() to: any;
  @Output() toChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
