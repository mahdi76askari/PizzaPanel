import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from '../../../services/http/feedback.service';
import { AlertService } from '../../../services/tools/alert.service';

@Component({
  selector: 'app-criticisms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criticisms.component.html',
  styleUrl: './criticisms.component.scss',
})
export class CriticismsComponent {
  formGroup = new FormGroup({
    message: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(
    private feedbackService: FeedbackService,
    private alertService: AlertService
  ) {}

  submit() {
    const body = {
      message: this.formGroup.controls.message.value,
      name: this.formGroup.controls.message.value,
      phoneNumber: this.formGroup.controls.message.value,
    };
    this.feedbackService.newSuggestion('', body).subscribe({
      next: (v: any) => {
        this.alertService.success({
          title: 'پیشنهاد شما ثبت شد ',
          msg: 'صمیمانه از لطف شما متشکریم.',
        });
      },
    });
  }
}
