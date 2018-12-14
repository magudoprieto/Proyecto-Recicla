import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariologin',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.css']
})
export class FormulariologinComponent implements OnInit {
  
  usuario: any[]; //Usuario logueado
  error: boolean
  form: FormGroup

  constructor(private peticionesService: PeticionesService,
              private router: Router) {
    this.error = false
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
      const response = res.json()
      if (response.error) {
        console.log('El usuario no existe')
        this.error = true
      } else {
        this.usuario = res.json()
        localStorage.setItem("usuario", JSON.stringify(this.usuario))
        console.log('El usuario existe')
        this.router.navigate(['open/profile'])
      }
      
    });
   
  }



  

}
