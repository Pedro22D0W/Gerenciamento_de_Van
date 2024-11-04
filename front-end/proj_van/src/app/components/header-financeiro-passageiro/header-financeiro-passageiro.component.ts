import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-financeiro-passageiro',
  standalone: true,
  imports: [],
  templateUrl: './header-financeiro-passageiro.component.html',
  styleUrl: './header-financeiro-passageiro.component.scss'
})
export class HeaderFinanceiroPassageiroComponent {
  constructor(private router: Router) {}

  logOut(){
    console.log("entrou");
    window.localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
