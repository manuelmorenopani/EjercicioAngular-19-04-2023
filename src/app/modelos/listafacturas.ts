export class listafactura{
    idfactura:number = 0;
    idcliente:number = 0;
    totalfactura:number = 0;
    iva:number = 0;

    constructor(idpedido:number,idcliente:number,totalfactura:number,iva:number){
    
    this.idfactura=idpedido;
    this.idcliente=idcliente;
    this.totalfactura=totalfactura;
    this.iva=iva;
    }
}