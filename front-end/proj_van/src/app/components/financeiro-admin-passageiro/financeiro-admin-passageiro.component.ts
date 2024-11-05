import { HeaderComponent } from '../header/header.component';
import { HeaderFinanceiroPassageiroComponent } from '../header-financeiro-passageiro/header-financeiro-passageiro.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VansAPIService } from '../../services/vans-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financeiro-admin-passageiro',
  standalone: true,
  imports: [HeaderComponent, HeaderFinanceiroPassageiroComponent, CommonModule],
  templateUrl: './financeiro-admin-passageiro.component.html',
  styleUrls: ['./financeiro-admin-passageiro.component.scss'] // Corrigido de styleUrl para styleUrls
})
export class FinanceiroAdminPassageiroComponent implements OnInit {
  
  boletos: any[] = [];
  passageiroId: string = ''; // Inicialização com valor padrão

  constructor(
    private route: ActivatedRoute,
    private boletoService: VansAPIService,
  ) {}

  ngOnInit(): void {
    this.passageiroId = this.route.snapshot.paramMap.get('id') || ''; // Atribuição com valor padrão
    if (this.passageiroId) {
      this.loadBoletos();
    } else {
      console.error('Passageiro ID não encontrado na URL.');
    }
  }

  loadBoletos(): void {
    this.boletoService.getBoletosByPassageiro(this.passageiroId).subscribe((data) => {
      this.boletos = data;
    });
  }

  editarBoleto(boletoId: string): void {
    console.log('Editando boleto com ID:', boletoId);
  }

  UpLoad() {
    console.log("Boleto");
  }
}