import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnumPipe } from '../../../pipes/enum.pipe';

@Component({
  selector: 'app-order-details',
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [ButtonComponent, EnumPipe],
})
export class OrderDetailsComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<OrderDetailsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  constructor() {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
