import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-contenedores',
  templateUrl: './info-contenedores.component.html',
  styleUrls: ['./info-contenedores.component.css']
})
export class InfoContenedoresComponent implements OnInit {

  arrContenedroSeleccionado: any[]

  constructor() { }

  ngOnInit() {
  }

  handleEnvioArr(arrRecibido) {
    console.log(arrRecibido);
    this.arrContenedroSeleccionado = arrRecibido
    
  }

}
