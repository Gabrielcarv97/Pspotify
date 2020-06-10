import { Cadastro } from './logar/cadastro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogarService {

  cadUrl = "http://localhost:3001/cadastro ";

  constructor(private http: HttpClient) { }

  createuser(cad : Cadastro): Observable<Cadastro>{
  return this.http.post<Cadastro>(this.cadUrl, cad)
  }

  readusers(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.cadUrl);
  }
}
