import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1FacturaComponent } from './componente1-factura/componente1-factura.component';
import { FormsModule } from '@angular/forms';
import { ServiciofacturaService } from './serviciofactura.service';
import { Componente2InicioComponent } from './componente2-inicio/componente2-inicio.component';
import { Componente2QuienesSomosComponent } from './componente2-quienes-somos/componente2-quienes-somos.component';
import { Componente2ContactoComponent } from './componente2-contacto/componente2-contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    Componente1FacturaComponent,
    Componente2InicioComponent,
    Componente2QuienesSomosComponent,
    Componente2ContactoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiciofacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
