// /*
// PATRONES DE DISEÑO
// -creacional
// -diseño estructural
// -comportamiento

// -creacional: constructor
// */
// class Home {
//     constructor() {
//         this.habitacion = 0;
//         this.cocina = 0;
//         this.patio = 0;
//         this.banio = 0;
//         this.cochera = 0;
//         this.living = 0;
//     }
//     setHabitacion(valor) {
//         this.habitacion = valor;
//     }
//     setCocina(valor) {
//         this.cocina = valor;
//     }
//     setPatio(valor) {
//         this.patio = valor;
//     }
//     setBanio(valor) {
//         this.banio = valor;
//     }
//     setCochera(valor) {
//         this.cochera = valor;
//     }
//     setLiving(valor) {
//         this.living = valor;
//     }
//     mostrar() {
//         return {
//             habitación: this.habitacion,
//             cocina: this.cocina,
//             patio: this.patio,
//             banio: this.banio,
//             cochera: this.cochera,
//             living: this.living
//         }
//     }
// }
// const home1 = new Home();
// home1.setBanio(1)
// home1.setCocina(1)
// home1.setHabitacion(1)
// home1.setLiving(1)
// console.log(home1.mostrar())
// const home2 = new Home()
// home2.setLiving(3)
// home2.setHabitacion(6)
// home2.setBanio(4)
// home2.setCochera(2)
// home2.setCocina(1)
// home2.setPatio(3)
// console.log(home2.mostrar())
// console.log(home2.mostrar().patio)

//creacional: modulo
const modulo = {
    nombre: "no declarado",
    apellido: "no declarado",
    setNombre: (valor) => {
        modulo.nombre = valor
    },
    setApellido: (valor) => {
        modulo.apellido = valor
    },
    getNombre: () => {
        return modulo.nombre
    },
    getApellido: () => {
        return modulo.apellido
    }
}
modulo.nombre = "Fabian"
modulo.setApellido("Salazar")
console.log(`Nombre: ${modulo.getNombre()}, Apellido ${modulo.getApellido()}`)
modulo.nombre = "Leonel"
console.log(`Nombre: ${modulo.getNombre()}, Apellido ${modulo.getApellido()}`)