import { Component, OnInit } from '@angular/core';
import { Contenedore } from '../model/contenedore.model';
import { ContenedoresService } from '../contenedores.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { PeticionesService } from '../peticiones.service';

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
  fin:boolean;
  usuario:string;

  constructor(private preguntasService:ContenedoresService,
              private router:Router,
              private user:UserServiceService,
              private peticionesService:PeticionesService) {
  this.contenedores = this.preguntasService.getContenedores();
   this.residuos = this.preguntasService.getResiduos();
   this.acierto = '';
   this.contador = 0;
   this.fin = false;
   this.usuario = JSON.parse(localStorage.getItem("usuario")).id
   
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
        this.fin = true;
      }
  }

  rutaOpen(){
    let datosNode = {
      puntos: this.contador,
      id_juego: 3,
      id_usuario: this.usuario
    }

    this.peticionesService.agregarPartidas(datosNode).then((res)=>{

    });
    
    //Reinicializar el array residuos
    this.contador = 0;
    this.router.navigate(['/open']);
  }


}
