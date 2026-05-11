/* 

Las funciones son bloques de código reutilizables que realizan una tarea específica.

1- Declarada
Es la forma más común de dfinir funciones. Se puede llamar a la función antes de su definición debido al hosting, es decir se eleva en el contexto de ejecución.

Sintaxis

function: nombreFunction() {
    //Cuerpo de la función
    ...

}

La llamada o invocación de la función

nombreFunction;

*/

function miAmorcito() {
    console.log("Soy el amorcito de mi novio");
}

miAmorcito();

/* 

2- Funciones expresadas o anónimas
Éste tipo de funciones se asignan a una variable, no puede ser llamada antes de su definición

Sintaxis;

const nombreConstante = function() {
    //Cuerpo de la función
}

Invocación a la función:

nombreConstante():

*/

const joshuaDespedida = function() {
    console.log("Adiós putos");
}

joshuaDespedida();

/* 

3- Arrow function

Tienen una sintaxis más consisa, son útiles ppara ejecuciones cortas. Generalmmente se suelen asignar a variables.

Sintaxsis:

const nombreConstante = () => {//Cuerpo de la función}

llamada

nombreConstante();

*/

const astridHermosa = () =>{console.log("Auxilio me desmayo, cállese viejo lesbiano")}

astridHermosa();

/* 

Parámetros y Argumentos

Las funciones pueden recibir parámettros cuando son invocadas

Sintaxis:

function nombreFunction( parámetro1, parámetro2, parámetro3, ... ) {
    //Cuerpo de la función
    //Los parámetros los usamos dentro del cuerpo de la función
    ...
}

Llamadas:

nombreFunction( argumento1, argumento2, ... )

*/

function saludar(nombre) {
    console.log("Holiwi " + nombre)
}

saludar("Rayito")

const sumar = function(num1, num2) {
    let suma = num1 + num2
    console.log("El resultado es " + suma)
}

sumar(5, 10);

/* 

Parámetros por defecto

En las funciones podemos tener valores por defecto si no se proporcionan los argumentos al llamar a la función.

Sintaxis:

function nombrefunction( parm1 = miAmorcito) {
    // Código que se ejecuta o cuerpa de la función
    ...
}

Llamada:

nombreFunction(); // Usará  los valores por default.
nombreFunction( arg1); // Usará el valor del argumento.

*/

const multiplicar = function( num1 = 1, num2 = 2) {
    let resultado = num1 * num2;
    console.log(`El resultado de multiplicar ${num1} por ${num2} es ${resultado}`);
}

multiplicar();

/* 

Valor de retorno

Las funciones pueden devolver o retornar un valor.
Para esto se utiliza la palabra "return"


Sintaxis:

nombreFunction() {
    // Cuerpo de la función
    ...
    ...
}

Llamada:

const nombreConstante = nombreFunction();

*/

function despedido( nombre = "Amorcito") {
    return `${nombre} Estás en mi corazón`
}

const mensajito = despedido();

console.log(mensajito);

/* 

Retorno implicito

Las funciones flecha no necesitan la palabra return, en su estructura más simple (una sola línea)

Sintaxis:

const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultado = restar(10,5);

console.log(resultado);