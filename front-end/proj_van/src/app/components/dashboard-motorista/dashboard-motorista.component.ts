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
  
  passageiros: any[] = [];

  constructor(private service: VansAPIService) {}

  ngOnInit() {
    this.getPassageiros();
   
  }

  getPassageiros() {
    this.service.GetPassageirosDaLinha().subscribe(data => {
      this.passageiros = data;
    });
  }


}
