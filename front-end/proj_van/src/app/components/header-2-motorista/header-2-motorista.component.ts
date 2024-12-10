import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VansAPIService } from '../../services/vans-api.service';

@Component({
  selector: 'app-header-2-motorista',
  standalone: true,
  imports: [],
  templateUrl: './header-2-motorista.component.html',
  styleUrl: './header-2-motorista.component.scss'
})
export class Header2MotoristaComponent {

  foto_de_perfil: any;

  constructor(private router: Router,private service : VansAPIService) {}

  logOut(){
    console.log("entrou");
    window.localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.service.GetMotoristaProfile().subscribe(data => {
      this.foto_de_perfil = data;
    });

  }


}
