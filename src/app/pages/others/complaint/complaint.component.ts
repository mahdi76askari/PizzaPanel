import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { TextAreaComponent } from '../../../components/elements/forms/text-area/text-area.component';
import { FormControl, FormGroup } from '@angular/forms';
import { FeedbackService } from '../../../services/http/feedback.service';
import { AlertService } from '../../../services/tools/alert.service';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [ButtonComponent, TextAreaComponent],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss',
})
export class ComplaintComponent {
  formGroup = new FormGroup({
    message: new FormControl(''),
  });

  constructor(
    private feedbackService: FeedbackService,
    private alertService: AlertService
  ) {}

  submit() {
    const body = {
      message: this.formGroup.controls.message.value,
    };
    this.feedbackService.newComplaint('', body).subscribe({
      next: (v: any) => {
        this.alertService.success({
          title: 'شکایت شما ثبت شد ',
          msg: 'در اولین فرصت پیگیری انجام خواهد شد. ',
        });
      },
    });
  }
}
