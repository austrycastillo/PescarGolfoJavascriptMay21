// // // //prototipado
// // // let obj = {
// // //     nommbre: "Ana",
// // //     apellido: "Perez"
// // // }
// // // //función constructora
// // // function Alumno(nombre, curso) {
// // //     this.nombre = nombre
// // //     this.curso = curso
// // //     this.datos = () => {
// // //         return `Nombre: ${this.nombre}, Curso: ${this.curso}`
// // //     }
// // // }
// // // let David = new Alumno("David Vega", "Js Avanzado")
// // // console.log(David.nombre)
// // // console.log(David.datos())
// // // Alumno.prototype.edad = "21"
// // // let Luis = new Alumno("Luis Appelhanz", "Python")
// // // Alumno.prototype.edad = "15"
// // // Alumno.prototype.mostrarEdad = function () {
// // //     return this.edad
// // // }

// // // //HERENCIA POR PROTOTIPO
// // // function Animal(nombre, edad, color, tamanio) {
// // //     this.nombre = nombre
// // //     this.edad = edad
// // //     this.color = color
// // //     this.tamanio = tamanio
// // // }
// // // Animal.prototype.getNombre = function () {
// // //     return this.nombre
// // // }
// // // Animal.prototype.getEdad = function () {
// // //     return this.edad
// // // }
// // // Animal.prototype.getColor = function () {
// // //     return this.color
// // // }
// // // Animal.prototype.getTamanio = function () {
// // //     return this.tamanio
// // // }
// // // Animal.prototype.informar = function () {
// // //     return `Nombre-> ${this.nombre} - Edad-> ${this.edad} - Color-> ${this.color} - Tamaño: ${this.tamanio}`
// // // }
// // // let a = new Animal("Patadas", 4, "plateado", "pequeño")
// // // let b = new Animal("trutru", 2, "negro", "grande")
// // // function Perro(nombre, edad, color, tamanio, ladra) {
// // //     Animal.call(this, nombre, edad, color, tamanio)
// // //     this.ladra = ladra
// // // }
// // // //Perro.prototype = new Animal()//es como el extend de clases
// // // Perro.prototype = Object.create(Animal.prototype)
// // // Perro.prototype.getLadra = function () {
// // //     return this.ladra
// // // }
// // // let c = new Perro("Como tu", 10, "marrón", "mediano", "guaguau")
// // // function Gato(nombre, edad, color, tamanio, ronronea) {
// // //     Animal.call(this, nombre, edad, color, tamanio)
// // //     this.ronronea = ronronea
// // // }
// // // Gato.prototype = new Animal()
// // // Gato.prototype.getRonronea = function () {
// // //     return this.ronronea
// // // }
// // // let d = new Gato("Kira",1,"blanco","grande","runrun")
// // // console.log(d.getNombre())
// // // console.log(d.getColor())
// // // console.log(d.informar())
// // // console.log(d.getRonronea())

// // //CLOSURE

// // function agregar() {
// //     var c = 1
// //     function otra() {
// //         c += 2;
// //     }
// //     otra()
// //     return c
// // }
// // var agregar2 = function () {
// //     var c = 1
// //     return function () {
// //         return c += 2;
// //     }
// // }()
// // console.log(agregar2())
// // console.log(agregar2())
// // console.log(agregar2())
// // function iniciar() {
// //     let nombre = "Chrome"
// //     function mostrarNombre() {
// //         console.log(nombre)
// //     }
// //     mostrarNombre()
// // }
// // iniciar()

// // function saludar(nombre) {
// //     let texto = `Hola ${nombre}`
// //     let mostrar = () => {
// //         console.log(texto)
// //     }
// //     return mostrar()
// // }
// // saludar("Pepe")

// //PERSISTENCIA
// //COOKIES
// let x = document.getElementById("dato")
// x.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(e.target)
//     console.log()
//     let valorUsuario = document.dato.micookie.value
//     let nombreCookie = "miPrimeraCookie"
//     guardarCookie(valorUsuario, nombreCookie)
// })
// function guardarCookie(valorUsuario, nombreCookie) {
//     document.cookie = nombreCookie + "=" + valorUsuario + ";expires=Thu, 18 Jul 2021 12:00:00 UTC";
// }
// let leer = document.getElementById("leer")
// leer.addEventListener("click", () => {
//     let x = document.cookie
//     console.log(x)
// })

//session storage
let boton = document.querySelector("button")
boton.addEventListener("click", () => {
    sessionStorage.dato1 = "Pepe";
    sessionStorage.dato2 = "Perez";
    let result = document.querySelector("#result")
    result.innerHTML = "Guardaste: " + sessionStorage.dato1 + ", " + sessionStorage.dato2;
})

//local storage
let botoncito = document.querySelector(".boton")
botoncito.addEventListener("click", () => {
    let nombre = document.querySelector(".nombre")
    let apellido = document.querySelector(".apellido")
    console.log(nombre.value)
    nombre = nombre.value
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido.value)
    alert("Guardado correctamente")
})