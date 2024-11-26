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

  StoreBoleto(boleto: any): Observable<any>{
    return this.client.post("http://localhost:8080/boleto/store",boleto,{ headers: this.getHeaders() })
  }

  GetMotoristas(): Observable<any>{
    return this.client.get("http://localhost:8080/motorista/getAll",{ headers: this.getHeaders() })
  }

  GetPassageiros(): Observable<any>{
    return this.client.get("http://localhost:8080/passageiro/getAll",{ headers: this.getHeaders() })
  }

  GetBoleto(): Observable<any>{
    return this.client.get("http://localhost:8080/boleto/getAll",{ headers: this.getHeaders() })
  }

  GetPassageirosDaLinha(): Observable<any>{
    return this.client.get("http://localhost:8080/motorista/getPassageirosDaLinha",{ headers: this.getHeaders() })
  }
  GetPassageirosDaVolta(): Observable<any>{
    return this.client.get("http://localhost:8080/motorista/getPassageirosDaVolta",{ headers: this.getHeaders() })
  }

  // Método para buscar boletos de um passageiro específico
  GetBoletosByPassageiroId(passageiroId: string): Observable<any> {
    return this.client.get(`http://localhost:8080/passageiro/boletos/${passageiroId}`, { headers: this.getHeaders() });
  }
  
  GetBoletosPassageiro(): Observable<any> {
    return this.client.get('http://localhost:8080/passageiro/boletos-passageiro', { headers: this.getHeaders() });
  }
  GetMotoristaProfile(): Observable<any> {
    return this.client.get('http://localhost:8080/motorista/get-profile', { headers: this.getHeaders(),responseType: 'text'  });
  }
  GetPassageiroProfile(): Observable<any> {
    return this.client.get('http://localhost:8080/passageiro/get-profile', { headers: this.getHeaders(),responseType: 'text' });
  }

  DownloadBoleto(boletoURL: string): Observable<any> {
    console.log(boletoURL)
    return this.client.get(boletoURL, { headers: this.getHeaders(), responseType: 'blob' });
  }

  updateStatus(boletoId: string): Observable<any> {
   return this.client.put(`http://localhost:8080/boleto/${boletoId}/updateStatus`, { headers: this.getHeaders() });
  } 

  GetMyMotorista(): Observable<any> {
    return this.client.get("http://localhost:8080/passageiro/get-my-motorista", { headers: this.getHeaders() });
  }
  GetMyMotoristaVolta(): Observable<any> {
    return this.client.get("http://localhost:8080/passageiro/get-my-motorista-volta", { headers: this.getHeaders() });
  }
  


}
