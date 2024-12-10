import { Component, OnInit } from '@angular/core';
import { Header2PassageiroComponent } from '../header-2-passageiro/header-2-passageiro.component';
import { HeaderComponent } from '../header/header.component';
import { VansAPIService } from '../../services/vans-api.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-dashboard-passageiro',
  standalone: true,
  imports: [CommonModule, Header2PassageiroComponent, HeaderComponent], // Incluir CommonModule nos imports
  templateUrl: './dashboard-passageiro.component.html',
  styleUrls: ['./dashboard-passageiro.component.scss']
})
export class DashboardPassageiroComponent implements OnInit {
  motorista: any[] = []; // inicializar como array
  motorista_volta: any[] = [];
  selectedMotorista: any = null;

  constructor(private vansAPIService: VansAPIService) {}

  abrirModal(motorista: any) {
    this.selectedMotorista = motorista;
  }

  fecharModal() {
    this.selectedMotorista = null;
  }

  ngOnInit(): void {
    // Chama a API para buscar o motorista do passageiro logado
    this.vansAPIService.GetMyMotorista().subscribe(
      (data) => {
        console.log("Dados do motorista:", data); // Verificar o conteúdo dos dados
        this.motorista = data; // Atribuir os dados à variável
      },
      (error) => {
        console.error("Erro ao buscar o motorista do passageiro:", error);
      }
    );
    this.vansAPIService.GetMyMotoristaVolta().subscribe(
      (data) => {
        console.log("Dados do motorista:", data); // Verificar o conteúdo dos dados
        this.motorista_volta = data; // Atribuir os dados à variável
      },
      (error) => {
        console.error("Erro ao buscar o motorista do passageiro:", error);
      }
    );
  }
}
