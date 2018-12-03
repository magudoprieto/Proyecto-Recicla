export class Pregunta{
    id:number
    texto: string
    respuestas: string[]
    respCorrecta: string

    constructor(values){
        this.id = values.id
        this.texto = values.texto
        this.respuestas = values.respuestas
        this.respCorrecta = values.respCorrecta

    }
}