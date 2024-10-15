import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';

@Component({
  selector: 'app-formulario-motorista',
  standalone: true,
  imports: [
    BotaoPrimarioComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-motorista.component.html',
  styleUrl: './formulario-motorista.component.scss' 
})

export class FormularioMotoristaComponent {
  formularioForms: FormGroup;

  constructor(private service: VansAPIService) {
    this.formularioForms = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6) 
      ]),
      cnh: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      linha: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  onSubmit() {
    if (this.formularioForms.valid) {
      // Faz a requisição para a API
      this.service.StoreMotorista(this.formularioForms.value).subscribe({
        next: (response) => {
          console.log('Motorista cadastrado com sucesso!', response);
          this.formularioForms.reset(); // Limpa o formulário após sucesso
        },
        error: (err) => {
          console.error('Erro ao cadastrar motorista:', err);
        },
      });
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.') ;
      console.log(this.formularioForms.value)
    }
  }
}
