/* 

Bucles

Son estructuras que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición específica.

Los más comunes son:

1. Bucle for:

Se utiliza cuando sabemos cuantas veces querémos repetir un vloque de código

Sintaxis:

for (.inicialización; condición; incremento) {
    //Código que se va a repetir su ejecución
}

Inicialización: Variable con valor inicial.
condición: evalúa una expresión. true > se ejecuta el bucle.
incremento: aumenta el valor de la variable en cada iteración.

*/

for (let i = 0; i <= 100; i++ ) {
    console.log(i)
}

/* 

2- Bucle while

Se utiliza cuando no sabemos  cuantas veces queremos repetir un bloque de código. Pero si queremos que se repita mientras se cumpla una condición.

Sintaxis:

inicialización

while (condición) {
    // Código que se ejecuta
    ...
    ibcremento
}

*/

/* let j = 0;
let repeticiones = parseInt(prompt("Cuantas veces quieres que se repita"))

while (j <= repeticiones) {
    console.log(j)
    j++;
} */

/* 

Bucle do...while

Es similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez. Ya que la condición se evalúa después de la ejecución.

Sintaxis:

Inicialización

do {
    // Código que se ejecuta al menos una vez
    ...
    incremento
}   while (condición);

*/

let k = 0;

do {
    console.log('Ponle magna');
    k++;
}   while (k < 5)