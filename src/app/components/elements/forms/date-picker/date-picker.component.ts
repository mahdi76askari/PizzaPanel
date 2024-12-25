import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GetDateComponent } from './get-date/get-date.component';

@Component({
  selector: 'a-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class InputBirthdayComponent {
  @Input() fc: FormControl<string | null> = new FormControl('');
  @Output() fcChange = new EventEmitter();
  dialog = inject(MatDialog);
  constructor() {}

  ngOnInit() {
    this.fc.valueChanges.subscribe({
      next: () => {
        this.fcChange.emit(this.fc);
      },
    });
  }

  openDate() {
    const dialogRef = this.dialog.open(GetDateComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}
