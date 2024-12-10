import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-2-financeiro',
  standalone: true,
  imports: [],
  templateUrl: './header-2-financeiro.component.html',
  styleUrl: './header-2-financeiro.component.scss'
})
export class Header2FinanceiroComponent {
    constructor(private router: Router) {}

    logOut(){
      console.log("entrou");
      window.localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(["/"]);
    }
}
