import { Component } from '@angular/core';
import { ContenedoresService } from '../contenedores.service';
import { Pregunta } from '../model/pregunta.model';
import { Router } from '@angular/router';
import { PeticionesService } from '../peticiones.service';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent {
  title = 'Trivial';
  pregunta: Pregunta;
  contPuntos:number;
  arrPreguntas:Pregunta[];
  contTiempo:number;
  mostrar:boolean;
  acierto:boolean;
  fin:boolean;

  usuario: string;
  
  

  constructor(private preguntasService: ContenedoresService,
              private router:Router,
              private peticionesService: PeticionesService,
              private userService: UserServiceService){
    
         this.usuario = JSON.parse(localStorage.getItem("usuario")).id     
  }

  ngOnInit(){
    this.preguntasService.resetPreguntaActiva();
    this.pregunta = this.preguntasService.getPreguntaActiva();
    this.arrPreguntas = this.preguntasService.getPreguntas();
    this.contPuntos = 0;
    this.contTiempo = 60;
    this.mostrar = false;
    this.acierto = true;
    this.fin = false;
  }

  //QUEDA PENDIENTE EL CONTADOR DE TIEMPO

    /*Mecánica principal del juego. Tras responder llama al método para
    pasar a la siguiente pregunta y dependiendo de si es respuesta
    correcto o no se le suman puntos*/
    handleClick($event){
      console.log($event.target.textContent);
      
              
                if(this.pregunta.id < this.arrPreguntas.length-1){
                    if($event.target.textContent == this.pregunta.respCorrecta){
                  
                      this.mostrar = true;
                      this.acierto = true;
                      this.contPuntos += 50;
                      this.pregunta = this.preguntasService.getPreguntaActiva();
                      
                    }else{
                      this.mostrar = true;
                      this.acierto = false;
                      this.pregunta = this.preguntasService.getPreguntaActiva();
                    }
              }else{
                this.fin = true;
              }
      
    }

    //cierra la pantalla entre respuestas para pasar a la siguiente pregunta
    cerrarPantalla(){
      console.log(this.mostrar);
      this.mostrar = !this.mostrar;
      console.log(this.mostrar);
    }

    //Al hacer click volvemos al open
    //QUEDA PENDIENTE ESTABLECER LA RUTA UNA VEZ QUE SE ENSAMBLE
    rutaOpen(){
      //PENDIENTE hacer una petición para ingresar la puntuación al usuario
      
      
      let datosNode = {
        puntos: this.contPuntos,
        id_juego: 2,
        id_usuario: this.usuario
      }
      
      this.peticionesService.agregarPartidas(datosNode).then((res)=>{

      });
      console.log(datosNode);
      this.contPuntos = 0;
      this.router.navigate(['/open']);
      
    }

}
