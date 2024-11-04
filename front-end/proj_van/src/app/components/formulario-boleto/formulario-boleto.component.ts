import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';

@Component({
  selector: 'app-formulario-boleto',
  standalone: true,
  imports: [
    BotaoPrimarioComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-boleto.component.html',
  styleUrls: ['./formulario-boleto.component.scss'] 
})
export class FormularioBoletoComponent {
  formularioBoleto: FormGroup;

  constructor(private service: VansAPIService) {
    this.formularioBoleto = new FormGroup({
      mes: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(12)
      ]),
      dataValidade: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
      valor: new FormControl('', [
        Validators.required,
        Validators.min(0.01) // Valor mínimo de R$ 0,01
      ])
    });
  }

  onSubmit() {
    if (this.formularioBoleto.valid) {
      // Faz a requisição para a API
      this.service.StoreBoleto(this.formularioBoleto.value).subscribe({
        next: (response) => {
          console.log('Boleto cadastrado com sucesso!', response);
          this.formularioBoleto.reset(); // Limpa o formulário após sucesso
        },
        error: (err) => {
          console.error('Erro ao cadastrar boleto:', err);
        },
      });
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.') ;
      console.log(this.formularioBoleto.value);
    }
  }
}
