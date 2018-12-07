import { Injectable } from '@angular/core';
import { Contenedor } from './model/contenedor.model';
import { Pregunta } from './model/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class ContenedoresService {
//componente contenedor
  arrContenedores: Contenedor []

//componente trivial
  arrPreguntas: Pregunta[]
  preguntaActiva: number

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
    this.arrPreguntas = [
      new Pregunta({
        id:0,
        texto: '¿Cuál es la capital de España?',
        respuestas: [
          'Madrid',
          'Barcelona',
          'Valencia',
          'Sevilla'
        ],
        respCorrecta: 'Madrid'
      }),
      new Pregunta({
        id:1,
        texto: 'Tienes cuatro pilas gastadas de un juguete electrónico, ¿Donde las arrojarías?',
        respuestas: [
          'Al contenedor marrón.',
          '¡Esta claro! Al de los plásticos.',
          'Las llevaría al punto limpio más cercano.',
          'Las tiraría a una alcantarilla.'
        ],
        respCorrecta: 'Las llevaría al punto limpio más cercano.'
      }),
      new Pregunta({
        id:2,
        texto: 'Te acabas de comer un helado y no sabes que hacer con su envoltorio.',
        respuestas: [
          'Lo tiro a la papelera o a un contenedor amarillo.',
          'Si no está mirando nadie lo puedo tirar al suelo.',
          'El contenedor de residuos orgánicos junto con el palito.',
          'Ante un residuo tan peligroso lo mejor es llevarlo al punto limpio.'
        ],
        respCorrecta: 'Lo tiro a la papelera o a un contenedor amarillo.'
      }),
      new Pregunta({
        id:3,
        texto: '¿Qué material creado por el ser humano se calcula que habrá más elementos que peces en el oceano?',
        respuestas: [
          'las algas.',
          'La resina.',
          'El chapapote.',
          'El plástico.'
        ],
        respCorrecta: 'El plástico.'
      }),
      new Pregunta({
        id:4,
        texto: 'Si en el bolsillo tienes 3 canicas, te regalan 2 más y pierdes 4. ¿Cuántas canicas tienes?',
        respuestas: [
          '9',
          '17',
          '4',
          '1'
        ],
        respCorrecta: '1'
      }),
      new Pregunta({
        id:5,
        texto: 'Si en el bolsillo tienes 3 canicas, te regalan 2 más y pierdes 4. ¿Cuántas canicas tienes?',
        respuestas: [
          '9',
          '17',
          '4',
          '1'
        ],
        respCorrecta: '1'
      }),
      new Pregunta({
        id:6,
        texto: 'Si en el bolsillo tienes 3 canicas, te regalan 2 más y pierdes 4. ¿Cuántas canicas tienes?',
        respuestas: [
          '9',
          '17',
          '4',
          '1'
        ],
        respCorrecta: '1'
      }),
      new Pregunta({
        id:7,
        texto: 'Si en el bolsillo tienes 3 canicas, te regalan 2 más y pierdes 4. ¿Cuántas canicas tienes?',
        respuestas: [
          '9',
          '17',
          '4',
          '1'
        ],
        respCorrecta: '1'
      }),
      new Pregunta({
        id:8,
        texto: 'Si en el bolsillo tienes 3 canicas, te regalan 2 más y pierdes 4. ¿Cuántas canicas tienes?',
        respuestas: [
          '9',
          '17',
          '4',
          '1'
        ],
        respCorrecta: '1'
      }),
      new Pregunta({
        id:9,
        texto: 'Si en el bolsillo tienes 3 canicas, te regalan 2 más y pierdes 4. ¿Cuántas canicas tienes?',
        respuestas: [
          '9',
          '17',
          '4',
          '1'
        ],
        respCorrecta: '1'
      })

    ]
  }
  //componente trivial
  getPreguntaActiva(){
    this.preguntaActiva += 1;
    return this.arrPreguntas[this.preguntaActiva];

  }

  resetPreguntaActiva(){
    this.preguntaActiva = 0
  }

  getArrPreguntas(){
    return this.arrPreguntas;
  }


}
