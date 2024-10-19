import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [BotaoPrimarioComponent,
            ReactiveFormsModule
],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.scss'
})

export class FormularioLoginComponent {
  loginForms: FormGroup;

  constructor(private service: VansAPIService) {
    this.loginForms = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.email
      ]),
      senha: new FormControl('', [
        Validators.required,
      ])
    });
  }

  // REQUISIÇÃO DA API
  onSubmit() {
    if (this.loginForms.valid) {
      // AQUI FAZEMOS A LÓGICA DE REQUISIÇÃO DA API
      console.log('Válido') ;
      console.log(this.loginForms.value)
    } else {
      console.log('Inválido') ;
      console.log(this.loginForms.value)
    }
  }
}
