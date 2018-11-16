import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { OpenComponent } from './open/open.component';
import { AppComponent } from './app.component';

//This is my case 
const routes: Routes = [
  {path: 'home', component: AppComponent, children: [ 
    //{path: 'register', component: },
    //{path: 'login', component: }
    ],
  {path: 'open', component: OpenComponent,children: [
    //{path: 'juego1', component: },
    //{path: 'juego2', component: },
    //{path: 'juego3', component: },
    //{path: 'juego4', component:}
  ]},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
