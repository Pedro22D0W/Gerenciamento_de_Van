import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2MotoristaComponent } from '../header-2-motorista/header-2-motorista.component';
import { VansAPIService } from '../../services/vans-api.service';
import { CommonModule } from '@angular/common';
import { BotaoPrimarioComponent } from '../botao-primario/botao-primario.component';

@Component({
  selector: 'app-dashboard-motorista',
  standalone: true,
  imports: [
    HeaderComponent, 
    CommonModule, 
    Header2MotoristaComponent, 
    BotaoPrimarioComponent
  ],
  templateUrl: './dashboard-motorista.component.html',
  styleUrl: './dashboard-motorista.component.scss'
})
export class DashboardMotoristaComponent {
  
  passageiros1: any[] = [];
  passageiros2: any[] = [];
  foto_de_perfil: any;

  constructor(private service: VansAPIService) {}

  ngOnInit() {
    var localData = window.localStorage["passageiros1"];
    if(!localData || localData==null){
      this.getPassageiros();
    }
    else{
      this.passageiros1 = JSON.parse(window.localStorage["passageiros1"])
      this.passageiros2 = JSON.parse(window.localStorage["passageiros2"]) 
      console.log(this.passageiros1)
    }
    this.service.GetMotoristaProfile().subscribe(data => {
      this.foto_de_perfil = data;
    });

  }

  getPassageiros() {
    this.service.GetPassageirosDaLinha().subscribe(data => {
      this.passageiros1 = data;
    });
  }

  removerPassageiroLista1(passageiro: any): void {
    this.passageiros2.push(passageiro); // Adiciona ao array local
    this.passageiros1 = this.passageiros1.filter(p => p.id !== passageiro.id);

    window.localStorage["passageiros1"] = JSON.stringify(this.passageiros1);
    window.localStorage["passageiros2"] = JSON.stringify(this.passageiros2);
    
 

  }
  removerPassageiroLista2(passageiro: any): void {
    this.passageiros1.push(passageiro); // Adiciona ao array local
    this.passageiros2 = this.passageiros2.filter(p => p.id !== passageiro.id);

    window.localStorage["passageiros1"] = JSON.stringify(this.passageiros1);
    window.localStorage["passageiros2"] = JSON.stringify(this.passageiros2);

  }


}
