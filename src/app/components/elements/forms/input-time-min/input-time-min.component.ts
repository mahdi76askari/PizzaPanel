import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrCheckComponent } from '../../../blocks/form-err-check/form-err-check.component';

@Component({
  selector: 'a-input-time-min',
  standalone: true,
  imports: [FormErrCheckComponent, ReactiveFormsModule],
  templateUrl: './input-time-min.component.html',
  styleUrls: ['./input-time-min.component.css'],
})
export class InputTimeMinComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() fc: FormControl<any> = new FormControl('', [
    Validators.min(1),
    Validators.max(60),
    Validators.required,
  ]);
  @Output() fcChange = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.limitInput();
    this.fc.valueChanges.subscribe({
      next: () => {
        this.fcChange.emit(this.fc);
      },
    });
  }

  limitInput() {
    this.fc.valueChanges.subscribe({
      next: () => {
        if (this.fc) {
          if (this.fc.value.toString().length > 2) {
            this.fc.setValue(this.fc.value.toString().slice(0, 2)); // Truncate to 2 digits
          }
        }
      },
    });
  }
}
