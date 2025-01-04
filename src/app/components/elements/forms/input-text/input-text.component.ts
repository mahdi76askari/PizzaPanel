import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormErrCheckComponent } from '../../../blocks/form-err-check/form-err-check.component';

@Component({
  selector: 'a-input-text',
  standalone: true,
  imports: [FormErrCheckComponent, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
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
