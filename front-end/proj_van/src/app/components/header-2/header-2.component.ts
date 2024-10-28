import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-2',
  standalone: true,
  imports: [],
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.scss'
})
export class Header2Component {

  constructor(private router: Router) {}

  logOut(){
    console.log("entrou");
    window.localStorage.clear();
    this.router.navigate(["/"]);
  }

}
