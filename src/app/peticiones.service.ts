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
  getPartidas() {
    return this.http.get(`${this.baseUrl}/partidas`).toPromise();
  }
}
