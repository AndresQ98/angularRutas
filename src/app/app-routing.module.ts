import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IdentificarComponent } from './identificar/identificar.component';
import { PracticaComponent } from './practica/practica.component';
import { DificultadesComponent } from './dificultades/dificultades.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'navegacion', component: NavegacionComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'identificar', component: IdentificarComponent },
  { path: 'practica', component: PracticaComponent },
  { path: 'dificultades', component: DificultadesComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
