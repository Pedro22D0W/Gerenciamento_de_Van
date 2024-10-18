import { Routes } from '@angular/router';
import { CadastroMotoristaComponent } from "./components/cadastro-motorista/cadastro-motorista.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CadastroPassageiroComponent } from "./components/cadastro-passageiro/cadastro-passageiro.component";	
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'cadastro-motorista',
        component: CadastroMotoristaComponent,
    },
    {
        path: 'cadastro-passageiro',
        component: CadastroPassageiroComponent,
    }

];
