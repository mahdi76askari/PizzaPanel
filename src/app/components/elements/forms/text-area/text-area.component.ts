import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormErrCheckComponent } from '../../../blocks/form-err-check/form-err-check.component';

@Component({
  selector: 'a-text-area',
  standalone: true,
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  imports: [FormErrCheckComponent, ReactiveFormsModule],
})
export class TextAreaComponent implements OnInit {
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
