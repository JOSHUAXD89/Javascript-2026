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
sumar(J, xA);