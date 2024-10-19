import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2MotoristaComponent } from '../header-2-motorista/header-2-motorista.component';

@Component({
  selector: 'app-dashboard-motorista',
  standalone: true,
  imports: [HeaderComponent, Header2MotoristaComponent],
  templateUrl: './dashboard-motorista.component.html',
  styleUrl: './dashboard-motorista.component.scss'
})
export class DashboardMotoristaComponent {

}
