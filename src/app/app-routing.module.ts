import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PlatillosComponent } from './platillos/platillos.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoComponent
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {
    path: 'menu',
    component: BarraLateralComponent
  },
  {
    path: 'platillos',
    component: PlatillosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
