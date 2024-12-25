import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

interface options {
  name: string;
  value: string;
}
@Component({
  selector: 'a-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() options: options[] = [];
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
