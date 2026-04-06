/*

Juego Piedra, papel o tijera

Vamos a crear un juego interactivo donde el usuario pueda jugar con la compu

Reglas
-Piedra vence a tijeras.
-Tijera vence a papel.
-Papel vence a piedra.
-Si ambos eligen lo mismo es empate.

Pasos para implementar

-Definir las opciones del jugador.
-Generar opción aleatoria para la computadora.
-Comparar estas opciones y determinar al ganador.
-Mostrar el resultado.

Estruvtura a realizar

-Variables
-Condicionales
-Generar número aleatorio (Math.random) entre 0 y 1
-Operadores lógicos y de comparación
-Concatenación de cadenas de texto (templates literals)
-Comentarios

*/

//Variables 1. Opción del jugador

const opcionjugador = prompt('Para jugar escribe: piedra, papeel o tijera');

//2. Opción de la computadora

const numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let opcionComputadora;

//3. Condicional - Asignar una opción dependiendo del número aleatorio

if (numeroAleatorio < 0.33 ) {
    opcionComputadora = 'piedra'
}   else if (numeroAleatorio < 0.66 ) {
    opcionComputadora = 'papel'
}   else {
    opcionComputadora = 'tijera'
}

//4. Resultados

console.log ('piedra, papel o tijera')
console.log ('Tu elección es: '+ opcionJugador);
console.log ('La compu eligió:' + opcionComputadora);
console.log ('------------------------------------------');

//5. Determinar el ganador a partir de condicionales

let resultado;

if ( opcionjugador === opcionComputadora) {
    resultado = `Empate, ambos eligieron ${opcionjugador}`;
}   else if (opcionjugador === 'piedra' && opcionComputadora === 'tijera') {
    reultado =  `Ganaste, piedra vence a tijera. `
}