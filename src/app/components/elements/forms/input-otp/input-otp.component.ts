import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormErrCheckComponent } from '../../../blocks/form-err-check/form-err-check.component';

@Component({
  selector: 'a-input-otp',
  standalone: true,
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.css'],
  imports: [FormErrCheckComponent, ReactiveFormsModule],
})
export class InputOtpComponent implements OnInit {
  @Input() placeholder: string = '';
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
