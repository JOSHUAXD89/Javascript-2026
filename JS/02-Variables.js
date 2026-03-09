/* 

Variables

Las variables son contenedores que almacenan datos. En JS se pueden declarar variables utilizando las palabras clave: var, let y const

var -> Es la forma màs antigua de declarar variables. Tiene un alcance global y puede ser re-declarada y actuaalizada.

let -> Es la forma màas moderna de declarar variables. Tiene un alcance local, puede ser actualizada pero no re-declararse dentro del mismo alcance.

const -> Tiene un alcance de bloque y no pueden ser re-declaradas ni actualizadas. Se utilizan con valores que nunca deben cambiar.

*/

//Declaracion de variable

var pokemon = "Furret";

console.log(pokemon)

pokemon = "Greninja"

console.log(pokemon)

//Declaraciòn de variables con let

let edad = 19;

console.log(edad);
edad = 20;

console.log(edad)

//Declaracion de const

const PI = 3.1416;

console.log(PI)

//PI = "Trozo de mugre";