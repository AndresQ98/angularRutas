import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IdentificarComponent } from './identificar/identificar.component';
import { PracticaComponent } from './practica/practica.component';
import { DificultadesComponent } from './dificultades/dificultades.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    DataBindingComponent,
    IdentificarComponent,
    PracticaComponent,
    DificultadesComponent,
    NoPageFoundComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
