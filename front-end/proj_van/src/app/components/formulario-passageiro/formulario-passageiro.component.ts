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
  selectedFile!: File;

  constructor(private service: VansAPIService) {
    this.formularioForms = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.email
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
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Armazena o arquivo selecionado
    console.log('Arquivo selecionado:', this.selectedFile); // Verifica se o arquivo foi capturado
  }

  onSubmit() {

    const formDataFileDTO = new FormData();
    // Adicionando o arquivo ao FormData
    
    formDataFileDTO.append('file',this.selectedFile);

    // Adicionando os dados do DTO ao FormData
    const passageiroData = {
      nome: this.formularioForms.get('nome')?.value,
      email: this.formularioForms.get('email')?.value,
      senha: this.formularioForms.get('senha')?.value,
      cpf: this.formularioForms.get('cpf')?.value,
      logradouro: this.formularioForms.get('logradouro')?.value,
      destino: this.formularioForms.get('destino')?.value,
      telefone: this.formularioForms.get('telefone')?.value,
      linha: this.formularioForms.get('linha')?.value,
      retorno: this.formularioForms.get('retorno')?.value,
    };

    formDataFileDTO.append('data', new Blob([JSON.stringify(passageiroData)], { type: 'application/json' }));
    
    if (this.formularioForms.valid) {
      console.log("dados do dto");
      console.log(formDataFileDTO.get("data"));
      
      // Faz a requisição para a API
      this.service.StorePassageiro(formDataFileDTO).subscribe({
        next: (response) => {
          console.log('Boleto cadastrado com sucesso!', response);
          this.formularioForms.reset(); // Limpa o formulário após sucesso
        },
        error: (err) => {
          console.error('Erro ao cadastrar boleto:', err);
        },
      });
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.') ;
      console.log(this.formularioForms.value);
    }
  }
}

