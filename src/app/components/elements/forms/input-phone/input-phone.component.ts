import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrCheckComponent } from '../../../blocks/form-err-check/form-err-check.component';

@Component({
  selector: 'a-input-phone',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormErrCheckComponent],
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.css'],
})
export class InputPhoneComponent implements OnInit {
  @Input() phone: FormControl<string | null> = new FormControl('');
  @Output() phoneChange = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.phone.valueChanges.subscribe({
      next: () => {
        this.phoneChange.emit(this.phone);
      },
    });
  }
}
