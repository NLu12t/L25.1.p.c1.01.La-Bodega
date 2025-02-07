export default class Cl_Bodega {
    constructor(){
        this.acGanancia = 0;
    }
    procesarArticulo(a){
      this.acGanancia += a.calcGanancia();
    }
    gananciaTotal(){
        return this.acGanancia;
    }
}