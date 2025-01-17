import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOrderStatus]',
  standalone: true,
})
export class OrderStatusDirective implements OnInit {
  @Input('appOrderStatus') status: string = ''; // Input to receive the status string

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyStatusColor();
  }

  private applyStatusColor() {
    let color: string;

    // Use a switch case to determine the color based on the status
    switch (this.status) {
      case 'Initial':
        color = '#eaf2f5'; // Yellow for pending
        break;
      case 'ApprovedByBranch':
        color = '#bbf9bd'; // Green for completed
        break;
      case 'Preparing':
        color = '#57e15c'; // Red for cancelled
        break;
      case 'OutForDelivery':
        color = '#66bcf5'; // Blue for in-progress
        break;
      case 'CanceledByCustomer':
        color = '#fbd2d2'; // Blue for in-progress
        break;
      case 'Delivered':
        color = '#9e9e9e'; // Blue for in-progress
        break;
      case 'CanceledByAdmin':
        color = '#d17979'; // Blue for in-progress
        break;
      default:
        color = '#bfdbfe'; // Default light gray for unknown status
        break;
    }

    // Use Renderer2 to set the background color of the element
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
