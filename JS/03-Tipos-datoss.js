/* 

Tipos de datos en JS

Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación.

En JS, existen varios tipos de datos que see pueden agrupar en 2 categorías: Primitivos y complejos.

Cada tipo de dato tirnr sus características y usos específicos en su programación.

1. Primitivos
Datos básicos que no se consideran objetos y no tienen métodos.

Números o numbers -> Representan alores numericos, ya sean enteros o decimales.

Cadena de caracteres -> Representan texto. El texto se coloca entre comillas o simples. Hay que ser consistentes en su uso.

Booleanos o booleans -> Representan valores lógicos, verdadero (true) o falso (false).

Indefinido o Undefined -> Es el valor que se le asigna a una variable que a sido declarada pero no se a inicializado

*/

// Numbers

let miEdad = 19;
let miEstatura = 1.78;

console.log(miEdad);
console.log(miEstatura);

//Strings

let miNombre = "Joshua"
let miApellido = "Ramírez"

console.log(miNombre)
console.log(miApellido)

//Boolean

let esEstudioso = true
let esGuapote = false

console.log(esEstudioso)
console.log(esGuapote)

//Undefined

let aprobaraProgramacion;

console.log(aprobaraProgramacion)

/* 

2. Complejos

Array -> Es un conjunto de datos que se almacenan en una lista ordenada. Los datos dentro de un arreglo se escriben entre parentesis o corchetes. [] (sift + {}) y se separan por comas.

Objects -> Es un conjunto de multiples datos, en pares: clave - valor. Los datos dentro de un valor se escriben entre llaves: {} y se separan por comas.

Functions -> Es un tipo de dato que puede ser invocado. Se declaran con la palabra reservada function y el código que ejecutan entre llaves {}.

*/

// Array

let misCaricaturas = ["Hazbin Hotel", "Metal Family", "Ok Ko"]
let misNumeros = [5, 10, 15, 20, 25]
let omegaLul = ['Troll Face', jijijija]

console.log(misCaricaturas)
console.log(misCaricaturas[0])
console.log(misNumeros)
console.log(misNumeros[3])
console.log(omegaLul[2])

//Objects

let perro = {
    nombre: 'Devorador de universos', 
    tamaño: 'enano',
    edad: 2, 
    color: 'blanco',
    ladra: 'true', 
    muerde: 'false'}

console.log(perro)
console.log(perro.nombre)
console.log(perro.edad)
console.log(perro.muerde)

//Functions 

let saludar = function() {
    // Aquí va el código wue se ejecuta cuando se invoca a la función
    console.log('Para entender la historia de fnaf...')
}

console.log(saludar)

saludar(); // Invocamos a la función