import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/elements/button/button/button.component';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss',
})
export class BranchesComponent {}
