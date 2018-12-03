import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { OpenComponent } from './open/open.component';
import { PanelregComponent } from './panelreg/panelreg.component';
import { FooterComponent } from './footer/footer.component';
import { FormulariologinComponent } from './formulariologin/formulariologin.component';
import { ProfileComponent } from './profile/profile.component';
import { ReciclaComponent } from './recicla/recicla.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { InfoContenedoresComponent } from './info-contenedores/info-contenedores.component';
import { ContenedoresComponent } from './info-contenedores/contenedores/contenedores.component';
import { PrincipalComponent } from './info-contenedores/principal/principal.component';
import { InformacionComponent } from './info-contenedores/informacion/informacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    OpenComponent,
    PanelregComponent,
    FooterComponent,
    FormulariologinComponent,
    ProfileComponent,
    ReciclaComponent,
    ProyectoComponent,
    RegisterComponent,
    HomeComponent,
    InfoContenedoresComponent,
    ContenedoresComponent,
    PrincipalComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
