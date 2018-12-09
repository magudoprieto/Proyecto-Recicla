export class Contenedore{
    id:number;
    nombre:string;
    color:string;
    imagen:string;
    
    constructor(pId,pNombre,pColor,pImagen){
        this.id = pId;
        this.nombre = pNombre;
        this.color = pColor;
        this.imagen = pImagen;
    }
}