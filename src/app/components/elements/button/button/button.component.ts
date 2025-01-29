import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'a-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: 'primary' | 'disabled' | 'info' | 'danger' | 'cancel' =
    'primary';
  @Input() size: 'full' | 'medium' | 'small' = 'medium';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  loadingIcon = faCircleNotch;
}
