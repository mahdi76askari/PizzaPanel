import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface err {
  msg: string;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}
  success(error: err) {
    this.toastr.success(error.msg, error.title);
  }

  warning(error: err) {
    this.toastr.warning(error.msg, error.title);
  }

  error(error: err) {
    this.toastr.error(error.msg, error.title);
  }
}
