import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panelreg',
  templateUrl: './panelreg.component.html',
  styleUrls: ['./panelreg.component.css']
})
export class PanelregComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout( ()=>{
      this.router.navigate(['open']);
    },4000);
  }

}
