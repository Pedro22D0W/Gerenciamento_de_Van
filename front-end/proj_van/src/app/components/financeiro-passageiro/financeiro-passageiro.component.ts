import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderFinanceiroPassageiroComponent } from '../header-financeiro-passageiro/header-financeiro-passageiro.component';
import { Router, RouterModule } from '@angular/router';
import { VansAPIService } from '../../services/vans-api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-financeiro-passageiro',
  standalone: true,
  imports: [HeaderComponent,
            HeaderFinanceiroPassageiroComponent,RouterModule, CommonModule
  ],
  templateUrl: './financeiro-passageiro.component.html',
  styleUrl: './financeiro-passageiro.component.scss'
})
export class FinanceiroPassageiroComponent {
  boletos: any[] = [];
  passageiroId: string = ''; // Inicialização com valor padrão

  constructor(
    private router: Router,
    private boletoService: VansAPIService,
  ) {}

  ngOnInit(): void {
    this.boletoService.GetBoletosPassageiro().subscribe((data) => {
      this.boletos = data;
      console.log(data)
    });
  }

  voltar() {
    this.router.navigate(['/dashboard-passageiro']);
  }

  download(link:string) {
  
    this.boletoService.DownloadBoleto(link).subscribe(
      (response: Blob) => {
          const url = window.URL.createObjectURL(response);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'boleto.pdf'; // Nome do arquivo que será baixado
          a.click();
          window.URL.revokeObjectURL(url); // Limpa o URL temporário após o download
      },
      error => {
          console.error("Erro ao fazer o download do boleto", error);
      }
  );
  }
}
