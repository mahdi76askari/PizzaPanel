import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ButtonComponent } from '../../button/button/button.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'a-input-time',
  standalone: true,
  imports: [NgxMaterialTimepickerModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css'],
})
export class InputTimeComponent implements OnInit {
  @Input() fc: FormControl<string | null> = new FormControl('');
  @Output() fcChange = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.fc.valueChanges.subscribe({
      next: () => {
        this.fcChange.emit(this.fc);
      },
    });
  }
}
