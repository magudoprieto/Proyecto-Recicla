import { Injectable } from '@angular/core';
import { Contenedor } from './model/contenedor.model';
import { Contenedore } from './model/contenedore.model';
import { Pregunta } from './model/pregunta.model';
import { PREGUNTAS } from '../app/data/preguntas.db';

@Injectable({
  providedIn: 'root'
})
export class ContenedoresService {
//componente contenedor
  arrContenedores: Contenedor [];

//componente trivial
  arrPreguntas: Pregunta[];
  preguntaActiva: number;

//componente reciclatu
contenedores:Contenedore[];
residuos:any[];

  constructor() { 
    //componente contenedor
    this.arrContenedores = [
      new Contenedor({
        nombre: 'amarillo',
        informacion: '',
        residuos: [
          'Botellas de plástico',
          'Latas',
          'Bolsas de plástico',
          'Papel de aluminio'
        ],
        errores: [
          'Envases de cartón',
          'Chicles'
        ]
      }),
      new Contenedor({
        nombre: 'verde',
        informacion: '',
        residuos: [
          'Botellas de cristal',
          'Botes de cristal',
          'Frascos de colonia'
        ],
        errores: [
          'Envases de cristal con partes de plástico (se debe separar antes de reciclar)',
          'Vasos',
          'Restos de cerámica'
        ]
      }),
      new Contenedor({
        nombre: 'azul',
        informacion: '',
        residuos: [
          'Hojas de papel',
          'Cajas de cartón',
          'Envases alimenticios de cartón'
        ],
        errores: [
          'Cuadernos con tapa de plástico (se debe separar antes de reciclar)',
          'Folios plastificados'
        ]
      }),
      new Contenedor({
        nombre: 'naranja',
        informacion: '',
        residuos: [
          'Restos de comida',
          'Pañales',
          'Vasos',
          'Cerámica'
        ],
        errores: [
          ''
        ]
      }),
      new Contenedor({
        nombre: 'marron',
        informacion: '',
        residuos: [
          'Restos de comida',
          'Servilletas',
          'Huesos'
        ],
        errores: [
          'Toallitas faciales',
          'Tampones'
        ]
      })
    ]
    //componente trivial
    this.preguntaActiva = 0;
    //componente reciclatu
    //ARRAY CONTENEDORES OBJETO CONTENEDOR
    this.contenedores = [
      new Contenedore(0,'organico','brown','../../assets/images/c_marron.png'),
      new Contenedore(1,'residuo','orange','../../assets/images/c_naranja.png'),
      new Contenedore(2,'vidrio','green','../../assets/images/c_verde.png'),
      new Contenedore(3,'plastico','yellow','../../assets/images/c_amarillo.png'),
      new Contenedore(4,'papel','azul','../../assets/images/c_azul.png')
    ];

    //ARRAY OBJETO RESIDUOS
    this.residuos = [
      {
        id:0,
        nombre:'platano',
        tipo:'organico',
        imagen: '../../assets/images/platano.png'
      },
      {
        id:1,
        nombre:'botella',
        tipo:'vidrio',
        imagen: '../../assets/images/vino.png'
      },
      {
        id:2,
        nombre:'cartones',
        tipo:'papel',
        imagen: '../../assets/images/cartones.png'
      },
      {
        id:3,
        nombre:'pollo',
        tipo:'organico',
        imagen: 'ruta'
      },
      {
        id:4,
        nombre:'lejia',
        tipo:'plastico',
        imagen: '../../assets/images/lejia.png'
      },
      {
        id:5,
        nombre:'algodon',
        tipo:'residuo',
        imagen: '../../assets/images/algodon.png'
      },
      {
        id:6,
        nombre:'folio',
        tipo:'papel',
        imagen: 'ruta'
      },
      {
        id:7,
        nombre:'chicle',
        tipo:'residuo',
        imagen: 'ruta'
      },
      {
        id:8,
        nombre:'bolsa',
        tipo:'plastico',
        imagen: 'ruta'
      },
    ];
    
  }


  //componente trivial
  getPreguntaActiva(){
    this.preguntaActiva += 1;
    return PREGUNTAS[this.preguntaActiva];

  }
  resetPreguntaActiva(){
    this.preguntaActiva = 0
  }
  getPreguntas(){
    return PREGUNTAS;
  }

  //componente reciclatu
  getContenedores(){
    return this.contenedores;
  }

 getObjectContenedor(idx:string){ //FALLA
   return this.contenedores[idx];
 }
 
 getResiduos(){
    return this.residuos;
 }
  

}
