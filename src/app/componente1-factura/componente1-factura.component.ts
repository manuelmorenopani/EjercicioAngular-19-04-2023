import { Component } from '@angular/core';
import { listafactura } from '../modelos/listafacturas';
import { ServiciofacturaService } from '../serviciofactura.service';

@Component({
  selector: 'app-componente1-factura',
  templateUrl: './componente1-factura.component.html',
  styleUrls: ['./componente1-factura.component.css']
})
export class Componente1FacturaComponent {
  factura : listafactura = new listafactura(0,0,0,0)
  facturas : listafactura[]=[]
  ids : number = 0
  constructor(private serviciofacutra: ServiciofacturaService){
    this.facturas=serviciofacutra.mifacturas
  }
 

  anadir(){
    this.serviciofacutra.anadirfactura(this.factura)
    this.factura=new listafactura(0,0,0,0)
   
}
  eliminar(){
    this.serviciofacutra.eliminarfacuta(this.ids)

  }
  buscar(){
    this.serviciofacutra.buscarfactura(this.ids)
  }
  modificar(){
    this.serviciofacutra.modificarfactura(this.ids, this.factura)
    this.factura=new listafactura(0,0,0,0)
  }

}
