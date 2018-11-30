import { Injectable } from '@angular/core';
import { Contenedor } from './model/contenedor.model';

@Injectable({
  providedIn: 'root'
})
export class ContenedoresService {

  arrContenedores: Contenedor []

  constructor() { 
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
  }


}
