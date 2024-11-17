import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VansAPIService } from '../../services/vans-api.service';

@Component({
  selector: 'app-header-2-passageiro',
  standalone: true,
  imports: [],
  templateUrl: './header-2-passageiro.component.html',
  styleUrl: './header-2-passageiro.component.scss'
})
export class Header2PassageiroComponent {
  foto_de_perfil: any;

  constructor(private router: Router,private service : VansAPIService) {}

  logOut(){
    console.log("entrou");
    window.localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

  FinanceiroPassageiro() {
    this.router.navigate(['/financeiro-passageiro']);
  }

  ngOnInit() {
    this.service.GetPassageiroProfile().subscribe(data => {
      this.foto_de_perfil = data;
    });
    console.log(this.foto_de_perfil);
  }

}
