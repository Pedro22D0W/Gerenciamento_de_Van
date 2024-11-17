import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { VansAPIService } from '../../services/vans-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [BotaoPrimarioComponent,
            ReactiveFormsModule
],
  providers:[VansAPIService],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.scss'
})

export class FormularioLoginComponent {
  loginForms: FormGroup;

  constructor(private service: VansAPIService ,private router: Router) {
    this.loginForms = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.email
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    rememberMe: new FormControl(false)
  });
  }

  // REQUISIÇÃO DA API
  onSubmit() {
    if (this.loginForms.valid) {

      this.service.login(this.loginForms.value).subscribe({
        next: (response) => {

          if (this.loginForms.value.rememberMe) {
            localStorage.setItem('email', this.loginForms.value.email);
            localStorage.setItem('senha', this.loginForms.value.senha); // Opcional: se quiser salvar a senha
          } else {
            localStorage.removeItem('email');
            localStorage.removeItem('senha');
          }

          console.log('Passageiro cadastrado com sucesso!', response);
          if (sessionStorage.getItem("role") == "ADMIN") {
            this.router.navigate(['/dashboard']);
          }
          if (sessionStorage.getItem("role") == "MOTORISTA") {
            this.router.navigate(['/dashboard-motorista']);
          }
          if (sessionStorage.getItem("role") == "PASSAGEIRO") {
            this.router.navigate(['/dashboard-passageiro']);
          }
          
          this.loginForms.reset(); // Limpa o formulário após sucesso
        },
        error: (err) => {
          this.router.navigate(['/']);
        },
      });
    
    } else {
      console.log('Inválido') ;
      console.log(this.loginForms.value)
    }
  }
  ngOnInit() {
    // Verificar se os dados de login estão no localStorage
    const savedEmail = localStorage.getItem('email');
    const savedSenha = localStorage.getItem('senha');

    // Se existir e-mail e senha salvos, preencher o formulário e tentar logar automaticamente
    if (savedEmail && savedSenha) {
      this.loginForms.controls['email'].setValue(savedEmail);
      this.loginForms.controls['senha'].setValue(savedSenha);
      this.loginForms.controls['rememberMe'].setValue(true);
      this.onSubmit(); // Tentar logar automaticamente
    }
  }
}
