import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-passageiro',
  standalone: true,
  imports: [
    BotaoPrimarioComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-passageiro.component.html',
  styleUrl: './formulario-passageiro.component.scss'
})
export class FormularioPassageiroComponent {
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
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
        // Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      ]),
      logradouro: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150)
      ]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
        // Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/) // Padrão para telefone (XX) XXXXX-XXXX
      ]),
      volta: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/) // Formato HH:mm
      ])
    });
  }

  onSubmit() {
    console.log(this.formularioForms.value);
  }
}
