import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from "../header-2/header-2.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, Header2Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
}
