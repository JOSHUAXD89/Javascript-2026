/* 

Concatenación de cadenas de texto

Es el proceso de unir 2 o más cadenas de texto en una sola. Esto se hace utilizando el operador "+".

*/

console.log("Tengo antojo de "+"mi novia")

let nombre = "Edduard"
let apellido = "London"
let edad = 19;

console.log("Hola me llamo " + nombre + " " + apellido + " y tengo " + edad + " años");

/* 

Plantillas literales

Es un espacio que se abre para la combinacióbn de variables y cadenas de texto, ayuda a concatenar de forma más dinámica y simple. Se usan los backtics (acento invertido o agudo)

*/

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)

/* 

Si se utiliza el operador de + con valores numericos se suman. Pero si se usan con cadenas de texto se concatenan.

*/

let a = "5"; //number
let b = "10";//string

console.log(a + b) //"510"