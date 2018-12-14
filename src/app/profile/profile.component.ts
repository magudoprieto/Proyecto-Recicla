import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuario: any[]

  constructor(private userService: UserServiceService,
              private router: Router) {
    this.usuario = this.userService.usuarioLog
    console.log(this.usuario);
    
  }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem("usuario");
    this.router.navigate(['/open'])
  }

}
