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
