export class Contenedor{
  nombre: string
  informacion: string
  residuos: string[]
  errores: string[]
  
  constructor(values){
    this.nombre = values.nombre
    this.informacion = values.informacion
    this.residuos = values.residuos
    this.errores = values.errores
  }
}