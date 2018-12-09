import { Component, OnInit } from '@angular/core';
import { Contenedore } from '../model/contenedore.model';
import { ContenedoresService } from '../contenedores.service';

@Component({
  selector: 'app-reciclatu',
  templateUrl: './reciclatu.component.html',
  styleUrls: ['./reciclatu.component.css']
})
export class ReciclatuComponent implements OnInit {

  contenedores:Contenedore[];
  residuos:any[];
  contenedor: any;
  residuo:any;

  acierto: string;

  contador:number;

  constructor(private preguntasService:ContenedoresService) {
  this.contenedores = this.preguntasService.getContenedores();
   this.residuos = this.preguntasService.getResiduos();
   this.acierto = '';
   this.contador = 0;
   
   }

  ngOnInit() {
  }
  dropped($event) {
    console.log($event)
  }

  droppedData: string;
  

  dragEnd($event,presiduo) {
    console.log('Element was dragged', $event);
    this.residuo = presiduo; 
  }

  onDrop($event,pcontenedor) {
    
    //Esta instrucción igual a la prop droppedData el string con el nombre del residuo arrojado
    //this.droppedData = $event.dropData
    this.droppedData = $event.id;
    console.log($event.dropData);
    //Esta instruccion iguala a la prop tipoContenedor el string con el nombre del objeto contenedor concreto
    this.contenedor = pcontenedor;
    console.log(this.contenedor.nombre);
    console.log(this.residuo.tipo);
    

    //Ahora hay que igualar
      if(this.contenedor.nombre == this.residuo.tipo){
        this.acierto = 'true';
        this.residuos.pop();
        this.contador += 50;
        setTimeout(()=>{
          this.acierto = '';
        },2000);
    
      }else{
        this.acierto = 'false';
        this.residuos.pop();
        setTimeout(()=>{
          this.acierto = '';
        },2000);
      }

      if(this.residuos.length == 0){
        console.log('el juego ha terminado');
      }
  }

  rutaOpen(){
    //peticion para insertar puntuación en base de datos
    //Reinicializar el array residuos
    //Reinicializar el contador de puntos
    //this.router.navigate(['/open']);
  }


}
