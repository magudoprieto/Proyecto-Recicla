import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  usuarios:any[];

  constructor(private peticionesService: PeticionesService) {
    this.form = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email,Validators.maxLength(40)]),
        
    /*Minimo 8 caracteres Maximo 15 Al menos una letra mayúscula Al menos una letra minucula Al menos un dígito No espacios en blanco Al menos 1 caracter especial*/

        contrasena: new FormControl(''/*,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]*/),
        nombre: new FormControl('',[Validators.required,Validators.maxLength(40),Validators.minLength(3)]),
        edad: new FormControl('',[Validators.required]),
        municipio: new FormControl(),
        provincia: new FormControl(),
        postal: new FormControl('',[Validators.minLength(5),Validators.maxLength(5)]),
        curso: new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
    
  }

  usuarioRegistrado(values){
   //En este método hay que ordenar al servicio que envie los datos de form al servicio.
    console.log(values);
    this.peticionesService.nuevoUsuario(values).then((res)=>{
      console.log(res.json());
      const response = res.json();
      if(response.error){
        alert(response.error);
      }
     
    });
  }

}
