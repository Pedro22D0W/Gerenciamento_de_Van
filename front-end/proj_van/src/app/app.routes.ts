import { Routes } from '@angular/router';
import { CadastroMotoristaComponent } from "./components/cadastro-motorista/cadastro-motorista.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CadastroPassageiroComponent } from "./components/cadastro-passageiro/cadastro-passageiro.component";	
import { HomeComponent } from './components/home/home.component';
import { DashboardPassageiroComponent } from './components/dashboard-passageiro/dashboard-passageiro.component';
import { DashboardMotoristaComponent } from './components/dashboard-motorista/dashboard-motorista.component';
import { FinanceiroPassageiroComponent } from './components/financeiro-passageiro/financeiro-passageiro.component';
import { FinanceiroAdminComponent } from './components/financeiro-admin/financeiro-admin.component';
import { FinanceiroAdminPassageiroComponent } from './components/financeiro-admin-passageiro/financeiro-admin-passageiro.component';


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
    },
    {
        path: 'dashboard-passageiro',
        component: DashboardPassageiroComponent,
    },
    {
        path: 'dashboard-motorista',
        component: DashboardMotoristaComponent,
    },
    {

        path: 'financeiro-passageiro',
        component: FinanceiroPassageiroComponent,
      
    },
    {

        path: 'financeiro',
        component: FinanceiroAdminComponent,

    },
    {

        path: 'financeiro-admin-passageiro',
        component: FinanceiroAdminPassageiroComponent,

    }

];
