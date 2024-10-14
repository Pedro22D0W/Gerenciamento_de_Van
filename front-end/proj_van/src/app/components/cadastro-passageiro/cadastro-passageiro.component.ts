import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from '../header-2/header-2.component';	
import { FormularioPassageiroComponent } from '../formulario-passageiro/formulario-passageiro.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-passageiro',
  standalone: true,
  imports: [
    FormularioPassageiroComponent,
    HeaderComponent,
    Header2Component,
    DashboardComponent,
    BotaoPrimarioComponent
  ],
  templateUrl: './cadastro-passageiro.component.html',
  styleUrl: './cadastro-passageiro.component.scss'
})
export class CadastroPassageiroComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/']);
  }
}
