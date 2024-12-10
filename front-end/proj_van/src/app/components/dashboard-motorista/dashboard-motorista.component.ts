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

  passageiros_volta1: any[] = [];
  passageiros_volta2: any[] = [];
  // default_foto_de_perfil: any = "http://localhost:8080/profile_passageiros/Captura%20de%20tela%202024-10-26%20102433.png";
  selectedPassageiro: any = null;

  constructor(private service: VansAPIService) {}
  
  abrirModal(passageiro: any) {
    this.selectedPassageiro = passageiro;
  }

  fecharModal() {
    this.selectedPassageiro = null;
  }

  ngOnInit() {
    var localData = window.localStorage["passageiros1"];
    if(!localData || localData==null){
      this.getPassageiros();
    }
    else{
      this.passageiros1 = JSON.parse(window.localStorage["passageiros1"])
      this.passageiros2 = JSON.parse(window.localStorage["passageiros2"]) 
      
      this.passageiros_volta1 = JSON.parse(window.localStorage["passageiros_volta1"])
      this.passageiros_volta2 = JSON.parse(window.localStorage["passageiros_volta2"])
    }
    // this.service.GetMotoristaProfile().subscribe(data => {
    //   this.foto_de_perfil = data;
    // });

  }

  getPassageiros() {
    this.service.GetPassageirosDaLinha().subscribe(data => {
      this.passageiros1 = data;
    });
    this.service.GetPassageirosDaVolta().subscribe(data => {
      this.passageiros_volta1 = data;
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

  removerPassageiroVolta1(passageiro: any): void {
    this.passageiros_volta2.push(passageiro); // Adiciona ao array local
    this.passageiros_volta1 = this.passageiros_volta1.filter(p => p.id !== passageiro.id);

    window.localStorage["passageiros_volta1"] = JSON.stringify(this.passageiros_volta1);
    window.localStorage["passageiros_volta2"] = JSON.stringify(this.passageiros_volta2);
    
 

  }
  removerPassageiroVolta2(passageiro: any): void {
    this.passageiros_volta1.push(passageiro); // Adiciona ao array local
    this.passageiros_volta2 = this.passageiros_volta2.filter(p => p.id !== passageiro.id);

    window.localStorage["passageiros_volta1"] = JSON.stringify(this.passageiros_volta1);
    window.localStorage["passageiros_volta2"] = JSON.stringify(this.passageiros_volta2);

  }


}
