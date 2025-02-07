export default class Cl_Articulo {
    constructor(costo){
        this._costo = costo;
    }
    set costo(costo){
        this._costo = costo;
    }
    get costo(){
        return this._costo;
    }
    calcGanancia(){
        return this._costo * 0.5;
    }
}