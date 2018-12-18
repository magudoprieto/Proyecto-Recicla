import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usuarioLog: any[]

  constructor() { 
    this.currentUser()
  }

  currentUser() {
    this.usuarioLog = JSON.parse(localStorage.getItem("usuario"))
    //console.log(this.usuarioLog);
  }

}
