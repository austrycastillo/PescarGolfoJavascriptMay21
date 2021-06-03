// //herencia
// class Padre {
//     constructor(n, a) {
//         this.nombre = n;
//         this.apellido = a;
//     }
//     mostrar() {
//         console.log(`Nombre: ${this.nombre} y Apellido: ${this.apellido}`);
//     }
//     static saludar(){
//         console.log("Hola soy el estático")
//     }
// }

// class Hijo extends Padre {
//     constructor(n, a, e) {
//         super(n, a)
//         this.edad = e;
//     }
//     mostrar(){
//         super.mostrar()
//         console.log(`tiene ${this.edad} años de edad`)
//     }
// }
// let eddy = new Padre("Eddy", "Castillo")
// let austry = new Hijo("Austry", "Castillo", 39)
// Padre.saludar()
// /*
// con un form de html utilizar la data para una clase para provincias con tres datos, a partir de eso crear un objeto y mostrar manipulando el dom
// crear una o varias clases hijos y puede ser un form individual


// */

class instrumento{
    nombre
    //#nombre
    // constructor(nombre){
    //     this.nombre = nombre
    // }
    mostrar(){
        return this.nombre
    }
    agregar(nombre){
        this.nombre = nombre
    }
    // get nombre(){
    //     return this.nombre
    // }
}
let obj1 = new instrumento()
//console.log(obj1.mostrar())
obj1.agregar("bateria")
//console.log(obj1.nombre())

