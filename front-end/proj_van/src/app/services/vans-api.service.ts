import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VansAPIService {

  constructor(private client: HttpClient) { }

  StoreMotorista(motorista: any): Observable<any>{
    return this.client.post("http://localhost:8080/motorista",motorista)
  }

  StorePassageiro(passageiro: any): Observable<any>{
    return this.client.post("http://localhost:8080/passageiro",passageiro)
  }

  GetMotoristas(): Observable<any>{
    return this.client.get("http://localhost:8080/motorista")
  }

  GetPassageiros(): Observable<any>{
    return this.client.get("http://localhost:8080/passageiro")
  }
}
