/* 

Clases

Las clases en JS son una forma de definir objetos sus propiedades y mètodos creando  un prototipo o plantilla del cual se generan instancias de objetos y heredan su comportammiento.

Por norma los nombres de clases comienzan con mayúscula.

Sintaxis:

class nombreClase {
    //Utilizamos un método constructor especial para inicializar una instancia del objeto

    constructor(prop1, prop2) {
        this.key = prop1;
        this.key = prop2;
        }
}

class - Define la clase
constructor() - Se ejecuta al crear al objeto

*/

class Estudiante {

    constructor(nombre,licenciatura, semestre) {
    this.nombre = nombre; 
    this.licenciatura = licenciatura;
    this.semestre = semestre;    
    }
    //Método para todas las instancias

    saludo()  {
        console.log(`Hola soy ${this.nombre} estudio ${this.licenciatura} y voy en el semestre No. ${this.semestre}`)
    }
}
console.log(Estudiante)

/* 

Crear instancias de la clase (Objetos)

Vamos a utilizar una constante y a crear una nueva instancia a partit de la clase.

Sintaxis:

const nombre Constante = new NombreClass(prop1, prop2, prop3...)

new > Crea una instancia 

*/

const estudiante1 = new Estudiante('Rayito', 'LDPM', 2);
const estudiante2 = new Estudiante('Mi amorcito', 'LDPM', 4);
const estudiante3 = new Estudiante('Mi princesa de la luna', 'LDPM', 6);

console.log(estudiante1); 
console.log(estudiante2);
console.log(estudiante3);

console.log(`Hola soy ${estudiante1.nombre} y estudio en ${estudiante1.Licenciatura} y voy en ${estudiante1.sesmetre} sesmtre`);
console.log(`Hola soy ${estudiante2.nombre} y estudio en ${estudiante2.Licenciatura} y voy en ${estudiante2.sesmetre} sesmtre`);
console.log(`Hola soy ${estudiante3.nombre} y estudio en ${estudiante3.Licenciatura} y voy en ${estudiante3.sesmetre} sesmtre`);

console.log("-------------------------------")

estudiante1.saludo();
estudiante2.saludo();
estudiante3.saludo();