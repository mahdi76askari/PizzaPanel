import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-err-check',
  standalone: true,
  templateUrl: './form-err-check.component.html',
  styleUrls: ['./form-err-check.component.css'],
})
export class FormErrCheckComponent implements OnInit {
  @Input() form: FormControl<string | null> = new FormControl('');

  constructor() {}

  ngOnInit() {}
}
