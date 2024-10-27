import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../types/login-response-type';

@Injectable({
  providedIn: 'root'
})
export class VansAPIService {

  constructor(private client: HttpClient) { }

  getToken() {
    return sessionStorage.getItem('token');
  }

  // Método para criar os headers com o token
  getHeaders() {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  login(loginform: any){
    return this.client.post<LoginResponse>("http://localhost:8080/auth", loginform).pipe(
        tap((value) => {
          sessionStorage.setItem("token",value.token)
          sessionStorage.setItem("role",value.role)
        }
      )
    )
  }

  StoreMotorista(motorista: any): Observable<any>{
    return this.client.post("http://localhost:8080/motorista/store",motorista,{ headers: this.getHeaders() })
  }

  StorePassageiro(passageiro: any): Observable<any>{
    return this.client.post("http://localhost:8080/passageiro/store",passageiro,{ headers: this.getHeaders() })
  }

  GetMotoristas(): Observable<any>{
    return this.client.get("http://localhost:8080/motorista/getAll",{ headers: this.getHeaders() })
  }

  GetPassageiros(): Observable<any>{
    return this.client.get("http://localhost:8080/passageiro/getAll",{ headers: this.getHeaders() })
  }
  GetPassageirosDaLinha(): Observable<any>{
    return this.client.get("http://localhost:8080/motorista/getPassageirosDaLinha",{ headers: this.getHeaders() })
  }
}
