import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente2InicioComponent } from './componente2-inicio/componente2-inicio.component';
import { Componente2QuienesSomosComponent } from './componente2-quienes-somos/componente2-quienes-somos.component';
import { Componente2ContactoComponent } from './componente2-contacto/componente2-contacto.component';
import { Componente1FacturaComponent } from './componente1-factura/componente1-factura.component';

const routes: Routes = [
  {path:'Inicio',component:Componente2InicioComponent},
  {path:'QuienesSomos',component:Componente2QuienesSomosComponent},
  {path:'Contacto',component:Componente2ContactoComponent},
  {path:'Facturas',component:Componente1FacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
