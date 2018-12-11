import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  baseUrl: string;

  constructor(private http: Http) { 
    this.baseUrl = 'http://localhost:3000/api';
  }
  //componente puntuaciones
  getPartidas() {
    return this.http.get(`${this.baseUrl}/partidas/json`).toPromise();
  }

  //componente registro de usuarios
  nuevoUsuario(values){
    return this.http.post(`${this.baseUrl}/usuarios/json`,values).toPromise();
  }
}
