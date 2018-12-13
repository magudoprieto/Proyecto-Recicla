import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usuarioLog: any[]

  constructor() { }

  currentUser() {
    this.usuarioLog = JSON.parse(localStorage.getItem("usuario"))
  }
}
