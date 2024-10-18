import { Component } from '@angular/core';
import { FormularioLoginComponent } from '../formulario-login/formulario-login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormularioLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
