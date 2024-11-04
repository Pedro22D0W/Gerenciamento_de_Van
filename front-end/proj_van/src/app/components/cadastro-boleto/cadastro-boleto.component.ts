import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2FinanceiroComponent } from '../header-2-financeiro/header-2-financeiro.component';
import { FormularioBoletoComponent } from '../formulario-boleto/formulario-boleto.component';

@Component({
  selector: 'app-cadastro-boleto',
  standalone: true,
  imports: [HeaderComponent, Header2FinanceiroComponent, FormularioBoletoComponent],
  templateUrl: './cadastro-boleto.component.html',
  styleUrl: './cadastro-boleto.component.scss'
})
export class CadastroBoletoComponent {

}
