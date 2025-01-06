import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  @Input() loading = false;
  constructor() {}

  ngOnInit() {}
}
