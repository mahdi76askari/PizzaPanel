import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-panel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './select-panel.component.html',
  styleUrls: ['./select-panel.component.css'],
})
export class SelectPanelComponent implements OnInit {
  readonly data = inject(MAT_DIALOG_DATA);

  dialogRef = inject(DialogRef<SelectPanelComponent>);

  constructor() {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
