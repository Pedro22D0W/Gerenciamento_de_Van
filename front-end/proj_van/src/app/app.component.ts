import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderComponent } from "./components/header/header.component";
import { Header2Component } from "./components/header-2/header-2.component";
import { CadastroMotoristaComponent } from './components/cadastro-motorista/cadastro-motorista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    DashboardComponent, 
    HeaderComponent, 
    Header2Component, 
    CadastroMotoristaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
}
