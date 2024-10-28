import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-2-motorista',
  standalone: true,
  imports: [],
  templateUrl: './header-2-motorista.component.html',
  styleUrl: './header-2-motorista.component.scss'
})
export class Header2MotoristaComponent {

  constructor(private router: Router) {}

  logOut(){
    console.log("entrou");
    window.localStorage.clear();
    this.router.navigate(["/"]);
  }

}
