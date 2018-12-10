import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit() {
    this.peticionesService.getPartidas().then((res) => {
      console.log(res.json());
    })
  }
}
