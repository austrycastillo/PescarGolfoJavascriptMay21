// // // // //creacional: prototipo
// // // // function Persona(nombre, apellido) {
// // // //     this.nombre = nombre
// // // //     this.apellido = apellido
// // // // }
// // // // Persona.prototype.getNombre = function () {
// // // //     console.log(`El nombre de la persona es  ${this.nombre}`)
// // // // }
// // // // Persona.prototype.getApellido = function () {
// // // //     console.log(`El apellido de la persona es ${this.apellido}`)
// // // // }
// // // // let person1 = new Persona("Ana", "Teran")
// // // // person1.getNombre()
// // // // person1.getApellido()
// // // // function Superheroe(nombre, apellido, poder) {
// // // //     Persona.call(this,nombre, apellido)
// // // //     this.poder = poder
// // // // }
// // // // Superheroe.prototype = new Persona()
// // // // Superheroe.prototype.getSuperHeroe = function () {

// // // //     this.getNombre()
// // // //     this.getApellido()
// // // //     console.log(`Es un super heroe con el poder de ${this.poder}`)
// // // // }
// // // // let person2 = new Superheroe("Clark","Kein","volar")
// // // // person2.getSuperHeroe()

// // // //creacional: SINGLETON
// // // const alumnos = {
// // //     listaAlumnos: [],
// // //     obtener: function(id){
// // //         return this.listaAlumnos[id]
// // //     },
// // //     crear: function(datos){
// // //         this.listaAlumnos.push(datos)
// // //     },
// // //     listado: function(){
// // //         return this.listaAlumnos;
// // //     }
// // // }
// // // const alumno1 = {
// // //     nombre: 'Tomas',
// // //     correo: 'to@correo.com'
// // // }
// // // const alumno2 = {
// // //     nombre: 'Jonathan',
// // //     correo: 'jj@correo.com'
// // // }
// // // const alumno3 = {
// // //     nombre: 'Aldi',
// // //     correo: 'a@correo.com'
// // // }
// // // alumnos.crear(alumno1)
// // // alumnos.crear(alumno2)
// // // alumnos.crear(alumno3)
// // // console.log(alumnos.listado())
// // // console.log(alumnos.obtener())

// // // //estructural : facade
// // class Pelicula {
// //     getTerror() {
// //         return [
// //             {
// //                 id: 'N-01',
// //                 nombre: 'Annabelle',
// //                 reparto: [
// //                     'Leonel', 'Matias', 'David'
// //                 ]
// //             },
// //             {
// //                 id: 'N-02',
// //                 nombre: 'it',
// //                 reparto: [
// //                     'Jonathan', 'Sebastian', 'Mathias'
// //                 ]
// //             },
// //             {
// //                 id: 'N-03',
// //                 nombre: 'El Exorcista',
// //                 reparto: [
// //                     'Linda', 'Pedro'
// //                 ]
// //             }
// //         ]
// //     }
// //     getAccion() {
// //         return [
// //             {
// //                 id: 'A-01',
// //                 nombre: 'Rapidos y furiosos',
// //                 reparto: [
// //                     'Fulano', 'La Roca', 'Vin Diesel'
// //                 ]
// //             },
// //             {
// //                 id: 'A-02',
// //                 nombre: 'Búsqueda implacable',
// //                 reparto: [
// //                     'Patrick', 'Liam Neeson'
// //                 ]
// //             }
// //         ]
// //     }
// //     getInfantil() {
// //         return [
// //             {
// //                 id: 'I-01',
// //                 nombre: 'El rey León',
// //                 reparto: [
// //                     'mufasa', 'Simba'
// //                 ]
// //             }
// //         ]
// //     }
// // }
// // const film = () => {
// //     const p = new Pelicula()
// //     const terror = p.getTerror()
// //     const accion = p.getAccion()
// //     const infantil = p.getInfantil()
// //     const gral = [...terror, ...accion, ...infantil]
// //     return gral
// // }
// // console.log(film())
// // console.log(film()[2].nombre)
// // const div = document.getElementById("caja")
// // film().forEach((dato) => {
// //     console.log(dato.nombre)
// //     const h1 = document.createElement("h1")
// //     h1.innerText = dato.nombre
// //     const p = document.createElement("p")
// //     p.innerText = dato.reparto
// //     const p2 = document.createElement("p")
// //     p2.innerText = dato.id
// //     div.appendChild(h1)
// //     const hr = document.createElement("hr")
// //     div.appendChild(p2)
// //     div.appendChild(p)
// //     div.appendChild(hr)
// // })

// //JQUERY
// /*
// $("selector").accion --> html, text, hide, show, animate
// */
// let texto = $("#caja").text()
// console.log(texto)
// $("#caja").text("Hola Jquery")
// // $("#caja").css("color","red")
// // $("#caja").css({
// //     "color":"blue",
// //     "background-color":"yellow",
// //     "font-size":"32px"
// // })
// $("#caja").addClass("dibujar")
// $("#caja").removeClass("dibujar")

$("#d").click(desaparecer)
function desaparecer() {
    //$("#caja").hide()
    $("#caja").fadeOut(2000)
}
$("#a").click(aparecer)
function aparecer() {
    //$("#caja").show()
    //$("#caja").fadeIn("slow")
    $("#caja").fadeIn(2000)
}

$("#llamada").click(() => {
    //$("#respuesta").slideToggle("slow")
    $("#respuesta").slideToggle(1000)
})

$(".animada").animate({
    left: "250px",
    top: "20px"
},2000)