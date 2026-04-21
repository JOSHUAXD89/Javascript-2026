/* 

Arreglos

Un arreglo es una coleción o lista de datos, es decir una lista de elementos.

En JS se definen utilizando [] y los elementos internos se separan por comas ","

Pueden contener el mismo tipo de datos o diferentes tipos, incluso pueden tener arreglos anidados.

*/

let frutas = ["uvas verdes", "cereza", "mango", "naranja"]
let calificaciones = [10, 8, 5, 2]
let misDatos = ["Joshua", 20, true]

console.log(frutas); //Muestra el arreglo completo
console.log(frutas.length); //El número completo
console.log(frutas[0]); //Accedemos a un dato a través del índice

console.log("calificación de Joshua: " + calificaciones[3])
console.log("Se me fue la juventud, tengo  " + misDatos[1] + " años");

let coordenadas = [[1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9] ]; //Arreglos anidados

console.log(coordenadas);
console.log(coordenadas[2]);
console.log(coordenadas[1][0]);

/* 

Método de los arreglos
Un método es una función pre establecida que nos ayuda atrabajar en arreglos y sus datos.

push() > Agrega uno o más elementos del arreglo
pop() > Elimina el último elemento del arreglo y lo devuelve.
shift() > Elimina uno o más elementos al inicio del arreglo
unshift() > Agrega uno o más elementos al inicio del arreglo
indexf() > Devuelve el índice del primer elemenyo que coincida con el valor
especificado o regresa -1 si no encuentra nadota.

*/

let películas = ["Chainsaw man reze arc", "Michael", "Spiderman across the spiderverse"];

console.log(películas);

películas.push("F1", "The Mitchels vs The Machines", "Sonic 3");

console.log(películas);

let ultimaPelicula = películas.pop();

console.log(películas);
console.log("La última película que vi fue: " + ultimaPelicula);

console.log(películas);

let primerPelicula = películas.shift();

console.log(películas);
console.log("La primer película que vi fue " + primerPelicula);

películas.unshift("Fnaf 1");

console.log(películas);

console.log( películas.indexOF("Michael"));

/* 

Iteración de arreglos

El acceso a los datos a través de un bucle o ciclo.

*/

let antojitos = ["Papas de gajo", "Elote", "Coca"];

antojitos.push("No te alcanza? ponle magna", "Que siga la corrupción");

for ( i=0 ; i < antojitos.length ; i++ ) {
    console.log("Se me antojaron unas " + antojitos[i] );
}