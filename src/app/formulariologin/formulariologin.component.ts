import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-formulariologin',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.css']
})
export class FormulariologinComponent implements OnInit {
  errorLogin:boolean;
  usuario:any[];
  form: FormGroup

  constructor(private peticionesService: PeticionesService) {
    this.errorLogin = false;
    this.form = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl()
    })
   }

  ngOnInit() {
  }

  inicioSesion(data) {
    this.usuario = data;
    console.log(this.usuario);
    this.peticionesService.usuarioLogueado(data).then((res)=>{
        console.log(res.json);
        const response = res.json();
      if(response.error){
        this.errorLogin = true;
      }
    });


    
  }

  

}
