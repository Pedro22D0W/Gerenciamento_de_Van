import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';

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
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      logradouro: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150)
      ]),
      destino: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150)
      ]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      linha: new FormControl('', [
        Validators.required,
      ]),
      retorno: new FormControl('', [
        Validators.required,
      ])
    });
  }

  onSubmit() {
    if (this.formularioForms.valid) {
      // Faz a requisição para a API
      this.service.StorePassageiro(this.formularioForms.value).subscribe({
        next: (response) => {
          console.log('Passageiro cadastrado com sucesso!', response);
          this.formularioForms.reset(); // Limpa o formulário após sucesso
        },
        error: (err) => {
          console.error('Erro ao cadastrar Passageiro:', err);
        },
      });
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.') ;
      console.log(this.formularioForms.value)
    }
  }
}
