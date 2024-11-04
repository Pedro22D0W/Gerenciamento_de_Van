import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderFinanceiroPassageiroComponent } from '../header-financeiro-passageiro/header-financeiro-passageiro.component';

@Component({
  selector: 'app-financeiro-admin-passageiro',
  standalone: true,
  imports: [HeaderComponent, HeaderFinanceiroPassageiroComponent],
  templateUrl: './financeiro-admin-passageiro.component.html',
  styleUrl: './financeiro-admin-passageiro.component.scss'
})
export class FinanceiroAdminPassageiroComponent {

  upload() {
    //IMPLEMENTAR LOGICA DE UPLOAD DO BOLETO ------------
    console.log("Boleto");
  }

}
