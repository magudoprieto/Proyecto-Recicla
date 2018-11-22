import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { OpenComponent } from './open/open.component';
import { AppComponent } from './app.component';

//This is my case 
const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'home', component: HeroComponent},
  {path: 'open', component: OpenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
