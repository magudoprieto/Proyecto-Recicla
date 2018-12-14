import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuario: any[]

  constructor(private userService: UserServiceService) {
    this.usuario = this.userService.usuarioLog
    console.log(this.usuario);
    
  }

  ngOnInit() {
  }

}
