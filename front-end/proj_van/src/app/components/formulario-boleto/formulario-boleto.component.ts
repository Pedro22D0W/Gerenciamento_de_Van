import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import { ActivatedRoute } from '@angular/router';


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
  selectedFile!: File;

  constructor( private route: ActivatedRoute,private fb: FormBuilder,private service: VansAPIService) {
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
      ]),
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Armazena o arquivo selecionado
    console.log('Arquivo selecionado:', this.selectedFile); // Verifica se o arquivo foi capturado
  }

  onSubmit() {

    const formDataFileDTO = new FormData();
    const passageiroID = this.route.snapshot.paramMap.get('id') || '';
    console.log(passageiroID)

    // Adicionando o arquivo ao FormData
    
    formDataFileDTO.append('file',this.selectedFile);

    // Adicionando os dados do DTO ao FormData
    const boletoData = {
      mes: this.formularioBoleto.get('mes')?.value,
      passageiroId: passageiroID,
      status: this.formularioBoleto.get('status')?.value,
      dataVencimento: this.formularioBoleto.get('dataValidade')?.value,
      valor: this.formularioBoleto.get('valor')?.value,
    };
  
    formDataFileDTO.append('data', new Blob([JSON.stringify(boletoData)], { type: 'application/json' }));
    
    if (this.formularioBoleto.valid) {
      console.log("dados do dto");
      console.log(formDataFileDTO.get("data"));
      
      // Faz a requisição para a API
      this.service.StoreBoleto(formDataFileDTO).subscribe({
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
