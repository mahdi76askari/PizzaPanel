import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/http/admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cancel-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css'],
})
export class CancelOrderComponent implements OnInit {
  reasonCancel = '';
  constructor(private adminService: AdminService) {}

  ngOnInit() {}
}
