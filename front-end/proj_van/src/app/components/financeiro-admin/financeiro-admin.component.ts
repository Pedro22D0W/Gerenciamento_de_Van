import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Header2FinanceiroComponent } from '../header-2-financeiro/header-2-financeiro.component';
import { VansAPIService } from '../../services/vans-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-financeiro-admin',
  standalone: true,
  imports: [HeaderComponent, Header2FinanceiroComponent, CommonModule, RouterModule],
  templateUrl: './financeiro-admin.component.html',
  styleUrl: './financeiro-admin.component.scss'
})
export class FinanceiroAdminComponent implements OnInit {

  passageiros: any[] = [];
  constructor(private service: VansAPIService) {}

  ngOnInit() {
    this.GetPassageiros();
  }

  GetPassageiros() {
    this.service.GetPassageiros().subscribe(data => {
      this.passageiros = data;
    });
  }

}
