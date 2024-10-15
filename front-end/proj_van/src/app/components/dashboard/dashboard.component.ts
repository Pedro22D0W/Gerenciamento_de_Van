import { Component, OnInit } from '@angular/core';
import { VansAPIService } from '../../services/vans-api.service';
import { HeaderComponent } from '../header/header.component';
import { Header2Component} from '../header-2/header-2.component'; // Importando o Header2Component
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:
  [HeaderComponent, 
   Header2Component,
   CommonModule],
 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  motoristas: any[] = [];
  passageiros: any[] = [];

  constructor(private service: VansAPIService) {}

  ngOnInit() {
    this.GetMotoristas();
    this.GetPassageiros();
  }

  GetMotoristas() {
    this.service.GetMotoristas().subscribe(data => {
      this.motoristas = data;
    });
  }

  GetPassageiros() {
    this.service.GetPassageiros().subscribe(data => {
      this.passageiros = data;
    });
  }
}
