import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContenedoresService } from 'src/app/contenedores.service';
import { Contenedor } from 'src/app/model/contenedor.model';


@Component({
  selector: 'app-contenedores',
  templateUrl: './contenedores.component.html',
  styleUrls: ['./contenedores.component.css']
})
export class ContenedoresComponent implements OnInit {

  @Output() envioArrContenedor = new EventEmitter()
  

  contenedores: Contenedor[]

  constructor(private contenedoresService: ContenedoresService) { 
    this.contenedores = this.contenedoresService.arrContenedores
  }

  ngOnInit() {
  }

  handleClick(data) {
    //console.log(data)
    this.envioArrContenedor.emit(data)
  }

}
