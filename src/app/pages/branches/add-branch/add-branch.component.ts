import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
  imports: [
    InputTextComponent,
    SelectComponent,
    NgxMaskDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AddBranchComponent implements OnInit {
  saturdayMorningFrom = '09:00';
  saturdayMorningTo = '12:00';
  constructor() {}

  ngOnInit() {}
}
