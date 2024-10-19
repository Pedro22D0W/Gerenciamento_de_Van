import { Component } from '@angular/core';
import { Header2PassageiroComponent } from '../header-2-passageiro/header-2-passageiro.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard-passageiro',
  standalone: true,
  imports: [Header2PassageiroComponent, HeaderComponent],
  templateUrl: './dashboard-passageiro.component.html',
  styleUrl: './dashboard-passageiro.component.scss'
})
export class DashboardPassageiroComponent {

}
