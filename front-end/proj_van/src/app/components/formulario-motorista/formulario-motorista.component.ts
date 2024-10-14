import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-motorista', // Alterado para 'app-formulario-motorista'
  standalone: true,
  imports: [
    BotaoPrimarioComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-motorista.component.html',
  styleUrls: ['./formulario-motorista.component.scss'] // Corrigido para styleUrls
})

export class FormularioMotoristaComponent {
  formularioForms: FormGroup;

  constructor() {
    this.formularioForms = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6) // Validação de mínimo 6 caracteres para senha
      ]),
      cnh: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{11}$/) // CNH com 11 dígitos
      ]),
      linha: new FormControl('', [
        Validators.required,
        Validators.min(1) // Validação de número mínimo para a linha
      ])
    });
  }

  onSubmit() {
    if (this.formularioForms.valid) {
      console.log(this.formularioForms.value);
      // Aqui você pode enviar os dados para um serviço ou API, etc.
    } else {
      console.log('Formulário inválido');
    }
  }
}
