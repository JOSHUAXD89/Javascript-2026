/* 

Condicionales

Son estructuras de control que permniten ejecutar diferentes bloques de código según una condición

1. if (si)
Evaluar una condición y si es true ejecuta el código dentro de sus llaves

Sintaxis
if(condición) {
 //código que se ejecuta
 }

*/

let edad = 13;

if (edad >= 18) {
    // Código que se ejecuta
    console.log ("Eres mayor de edad, ppuedes ver este contenido☆*: .｡. o(≧▽≦)o .｡.:*☆")
}

/* 

2. else (no es verdadero)
Permite ejecutar un bloque de código si la condicón es falsa.

Sintaxis

if (condición) {
    //Condición
}   else {
    //Condicón que se ejecuta si es falso
}

*/

let hora = 8

if (hora < 12) {
    console.log("Papu despierta, tienes que hornear unos momazos(●'◡'●)")
}   else {
    console.log("Papu estúpido, ya no horneaste tus momazos(*/ω＼*)")
}

/* 

3. else if  (si no)

Nos permite tener más de una condición para ser evaluada. Esta evaluación es em secuencia, hasta que una condición sea verdadera se ejecutará ese bloque de código.

Sintaxis

if (Condición) {
    //condición que se ejecuta
}   else if (condición) {
    //Código que se ejecuta si la condición es verdadera 
}   else {
    //Código que se ejecuta si ninguna de las condiciones es verdadera
}

*/

let calificacion = 5

if (calificacion >= 9) {
    console.log("Eres un programador GOTY (●'◡'●)")
}   else if (calificacion >= 7) {
    console.log("Vas mediocremente bien (^///^)") 
}   else if (calificacion >= 5) {
    console.log("Idiota (^///^)") 
}   else {
    console .log("Imcompetente, ya valiste (❁´◡`❁)")
}