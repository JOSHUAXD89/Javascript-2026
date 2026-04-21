/* 



*/

const perrito = {
    nombre: 'Lucy',
    raza: 'Lucy',
    edad: 3,
    raza: 'Lucy',
    ladra: true,
    brinca: false,
    juguetes: ['pollo', 'jirafa sin ojos'],
    saludo: function() {console.log("Holiwi soy Lucy la jochis")}
}

console.log(perrito);

/* 

Para acceder a las propiedades y sus valoresl, utilizamos la notación de punto o corchetes.

nombreObjeto.clave > Noración de punto
nombreObjeto[clave] > Nptación de corchetes

*/

console.log(perrito.nombre);
console.log(perrito['juguetes']);

console.log("Hola me llamo " + ['nombre'] + " y tengo " + ['edad'] + "años y soy un perrito " + ['raza']);