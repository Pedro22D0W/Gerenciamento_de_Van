import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from '../header-2/header-2.component';	
import { FormularioMotoristaComponent } from '../formulario-motorista/formulario-motorista.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { Router } from '@angular/router';
import { VansAPIService } from '../../services/vans-api.service';

@Component({
  selector: 'app-cadastro-motorista',
  standalone: true,
  imports: [
    FormularioMotoristaComponent,
    HeaderComponent,
    Header2Component,
    DashboardComponent,
    BotaoPrimarioComponent
  ],
  templateUrl: './cadastro-motorista.component.html',
  styleUrl: './cadastro-motorista.component.scss'
})
export class CadastroMotoristaComponent {
  constructor(private router: Router) {
    
  }
  
 

  voltar() {
    this.router.navigate(['/dashboard']);
  }
}
