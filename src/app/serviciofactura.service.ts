import { Injectable } from '@angular/core';
import { listafactura } from './modelos/listafacturas';

@Injectable({
  providedIn: 'root'
})
export class ServiciofacturaService {

  mifacturas:listafactura[]=[]

  constructor() { }

  anadirfactura(factura:listafactura){
    this.mifacturas.push(factura)
  }
  buscarfactura(id:number){
    let dato = this.mifacturas.findIndex((mifacturas) => mifacturas.idfactura === id);
    if(dato!==-1){
    alert("esete es el id " + this.mifacturas[dato].idfactura)
    }

  }
  eliminarfacuta(id:number){
    let dato = this.mifacturas.findIndex((mifacturas) => mifacturas.idfactura=== id)
    if(dato!==-1){
    this.mifacturas.splice(dato, 1)
    }

  }
  modificarfactura(id:number, nuevafactura:listafactura){
   
    let dato = this.mifacturas.findIndex((mifacturas) => mifacturas.idfactura=== id)
    if(dato!==-1){
    this.mifacturas[dato]=nuevafactura

  }
}
}
