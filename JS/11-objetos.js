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

// Acseso a lasmpropiedades boleanas

console.log(perrito.ladra);
console.log(perrito.brinca);

if (perrito.ladra === true) {
    console.log("Soy una perrita bien jochis")
} else {
    console.log("Soy una perrita hambreada")
}

if (perrito.brinca){
    console.log("Soy una perrita chistosa")
}   else {
    console.log("Ya no quiero nada")
}

//Acsesom a array

console.log(perrito.juguetes);
console.log(perrito.juguetes[0]);
console.log(perrito.juguetes[1]);

console.log(`Mis juguetes fav son: mi almohada ${perrito.juguetes[0]} y ${perrito.juguetes[1]}`)

/* 

Métodos de objeto

Son funciones que están asociadas a un objeto. Se pueden llamar utilizando .

Todas las funciones para ser llamadas se escriben así.

nombreFunction > llamamos a función

En los objetos lops escribimos así:
nombreObjeto.nombreFunction()

Cuando una función está dentro de un objeto se les llama métodos

*/

console.log(perrito.saludo()) //Indefinido
perrito.saludo(); //Imprime el mensaje dentro del bloque de código de la función

/* 

Agregar propiedades

Para agregar propiedades despuès de declarar el objeto usamos la siguiente sintaxis.

nombreObjeto.nuevaPropiedad = valor;

Para actualizar una propiedad usamos la misma sintaxis del punto y el valor actualizadp

nombreObjeto.propiedadExistente = Buevo valor

*/

console.log(perrito)//

perrito.color = "Blanco";
perrito.edad = 3;
perrito.corre;