import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

type BtnVariants = "primary" | "secundary";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-primario.component.html',
  styleUrl: './botao-primario.component.scss' // Corrigido para 'styleUrls'
})
export class BotaoPrimarioComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  constructor(private router: Router) {} // Injeta o Router

  // Corrigido o nome do Output para evitar conflito com o evento nativo 'submit'
  @Output("ButtonSubmit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  // Função para navegação
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  
}
