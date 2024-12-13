import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Card } from 'primeng/card';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PanelModule, Card],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
