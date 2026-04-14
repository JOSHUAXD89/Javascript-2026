/* 

Switch
Es una sentencia que se utiliza para realizar diferentes acciones según distitas condiciones.

Se suele usar como forma alternativa a multiples sentencias else-if
Cuando se tiene una variable que puede tener diferentes variables.

Sintaxis:

switch (variable) {

//Casos según se compare
case valor1:
    //Código a ejecutar
    ..
    ..
    break; // Para la ejecución del código

case2 valor2;
    //Código a ejecutar
    ..
    ..
    break; // Sea opcional

    default:
        // Va a ejecutar el código si no coincide con ningún caso
}

*/

let eleccionLicenciatura = prompt( "Escribe la licenciatura que te interesa: Televisión, Diseño o Consultoría") //televisión, diseño, consultoría

console.log(eleccionLicenciatura);

switch (eleccionLicenciatura) {
    case 'Televisión':
        console.log('Has elegido la licenciatura de Televisión, pendejo');
        break;

    case 'Diseño':
        console.log('Has elegido la lisenciatura de Diseño, bien hijdo de puta');
        break;

    case 'Consultoría':
        console.log('Has elegido la Consultoría, Ora puto');
        break;

    default:
        console.log('Pareces Axel')
}