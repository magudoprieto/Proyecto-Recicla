import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {

  partidas:any[];
  //EN EL FUTURO HACER UN ARRAY SOLO CON LAS 10 MEJORES PUNTUACIONES
  //EN EL FUTURO MODIFICAR LA PETICION PARA QUE DEVUELVA POR ORDEN DE RANKEO

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit() {
    this.peticionesService.getPartidas().then((res) => {
      console.log(res.json());
      this.partidas = res.json();
      console.log(this.partidas);
    })
  }
}
