import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-formulariologin',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.css']
})
export class FormulariologinComponent implements OnInit {
  
  usuario:any[]; //Usuario logueado
  form: FormGroup

  constructor(private peticionesService: PeticionesService) {
    this.form = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl()
    })
   }

  ngOnInit() {
  }

  inicioSesion(data) {
    //console.log(data); //USUARIO Y SU PASSWORD (DATOS ESCRITOS EN EL LOGIN)
    this.peticionesService.usuarioLogueado(data).then((res) => {
      console.log(res.json()) //TODA LA INFORMACIÓN DEL USUARIO QUE ESTÁ LOGIN
      this.usuario = res.json()
    });
   
  }



  

}
