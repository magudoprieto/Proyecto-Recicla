import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { OpenComponent } from './open/open.component';
import { FormulariologinComponent } from './formulariologin/formulariologin.component';
import { ProfileComponent } from './profile/profile.component';
import { ReciclaComponent } from './recicla/recicla.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { InfoContenedoresComponent } from './info-contenedores/info-contenedores.component';
import { TrivialComponent } from './trivial/trivial.component';

//This is my case 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'open', component: OpenComponent, children:[
    {path:'',component:FormulariologinComponent},
    {path: 'profile', component:ProfileComponent}
  ]},
  {path: 'juego1', component: InfoContenedoresComponent},
  { path: 'juego2',component: TrivialComponent },
  {path: 'proyecto', component:ProyectoComponent},
  {path: 'registro', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
