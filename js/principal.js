/**
 * LA BODEGA
 * En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 * Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
 * Ej. Costos varios artículos: 10, 20, 14, 6 y 4
 * La salida requerida presenta el siguiente formato:
 * La ganancia será de Bs.27
 */
import Cl_Articulo from "./Cl_articulo.js";
import Cl_Bodega from "./Cl_Bodega.js";

let bodega = new Cl_Bodega();

let articulo1 = new Cl_Articulo('10');
let articulo2 = new Cl_Articulo('20');
let articulo3 = new Cl_Articulo('14');
let articulo4 = new Cl_Articulo('6');
let articulo5 = new Cl_Articulo('4');

bodega.procesarArticulo(articulo1);
bodega.procesarArticulo(articulo2);
bodega.procesarArticulo(articulo3);
bodega.procesarArticulo(articulo4);
bodega.procesarArticulo(articulo5);

let salida = document.getElementById("salida");

salida.innerHTML = `
La ganancia será de Bs. ${bodega.gananciaTotal()}
`
