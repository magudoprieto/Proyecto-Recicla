import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulariologin',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.css']
})
export class FormulariologinComponent implements OnInit {

  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl()
    })
   }

  ngOnInit() {
  }

  inicioSesion(data) {
    console.log(data);
    
  }

  

}
