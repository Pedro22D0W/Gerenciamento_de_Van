import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-2-passageiro',
  standalone: true,
  imports: [],
  templateUrl: './header-2-passageiro.component.html',
  styleUrl: './header-2-passageiro.component.scss'
})
export class Header2PassageiroComponent {

  constructor(private router: Router) {}

  logOut(){
    console.log("entrou");
    window.localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

}
