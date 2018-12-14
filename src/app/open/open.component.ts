import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  usuario: any[]
  constructor(private router: Router,
    private userService: UserServiceService) { 
    this.usuario = userService.usuarioLog
    if(JSON.parse(localStorage.getItem("usuario"))) {
      this.router.navigate(['open/profile'])
    }
  }

  ngOnInit() {
  }

}
