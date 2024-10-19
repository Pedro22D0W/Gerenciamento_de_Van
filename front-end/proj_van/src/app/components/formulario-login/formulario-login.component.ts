import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [BotaoPrimarioComponent],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.scss'
})
export class FormularioLoginComponent {

}
