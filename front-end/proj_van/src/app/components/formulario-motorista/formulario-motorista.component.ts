import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';

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

  constructor(private service: VansAPIService) {
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
      telefone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/) // Padrão para telefone (XX) XXXXX-XXXX
      ]),
      linha: new FormControl('', [
        Validators.required,
        Validators.min(1) // Validação de número mínimo para a linha
      ])
    });
  }

  onSubmit() {
    if (this.formularioForms.valid) {
      // Faz a requisição para a API
      this.service.postMotorista(this.formularioForms.value).subscribe({
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
