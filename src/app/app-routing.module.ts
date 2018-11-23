import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { OpenComponent } from './open/open.component';
import { FormulariologinComponent } from './formulariologin/formulariologin.component';
import { ProfileComponent } from './profile/profile.component';
import { ReciclaComponent } from './recicla/recicla.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

//This is my case 
const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'home', component: HeroComponent},
  {path: 'open', component: OpenComponent, children:[
    {path:'',component:FormulariologinComponent},
    {path: 'profile', component:ProfileComponent}
  ]},
  {path: 'recicla', component:ReciclaComponent},
  {path: 'proyecto', component:ProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
