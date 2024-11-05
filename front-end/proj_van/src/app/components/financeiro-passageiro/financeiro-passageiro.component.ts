import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderFinanceiroPassageiroComponent } from '../header-financeiro-passageiro/header-financeiro-passageiro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financeiro-passageiro',
  standalone: true,
  imports: [HeaderComponent,
            HeaderFinanceiroPassageiroComponent
  ],
  templateUrl: './financeiro-passageiro.component.html',
  styleUrl: './financeiro-passageiro.component.scss'
})
export class FinanceiroPassageiroComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/dashboard-passageiro']);
  }

  download() {
    //IMPLEMENTAR LOGICA DE DOWNLOAD DO BOLETO ------------
    console.log("Boleto");
  }
}
