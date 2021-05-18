//PRACTICA 1
// let padre = document.getElementById("padre")
// let hijo = document.getElementById("hijo")
// let nieto = document.getElementById("nieto")
// nieto.addEventListener("click", function (e) {
//     console.log(e)
//     e.stopPropagation()//detiene la propagación del evento
//     console.log("soy el nieto")
// }, false)
// padre.addEventListener("click", function () {
//     console.log("soy el padre")
// }, false)

//PRACTICA 2
// window.addEventListener("resize", () => {
//     if (window.outerWidth > 600) {
//         document.body.style.backgroundColor = 'red'
//     } else {
//         document.body.style.backgroundColor = 'blue'

//     }
// })

//PRACTICA 3
// let boton = document.getElementById("a")
// function listener() {
//     console.log("tocaste")
//     var dinamica = document.createElement("button")
//     dinamica.innerText = "dinámico"
//     document.body.appendChild(dinamica)
//     boton.removeEventListener("click", listener, false)
// }
// boton.addEventListener("click", listener, false)

//PRACTICA 4
// let form = document.querySelector("form")
// let input = document.querySelector("#input")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()//detener el comportamiento por default
//     let valor = input.value
//     valor = valor.trim()//ltrim, rtrim, trim borran espacios en blanco

//     console.log(encodeURIComponent(valor))//ataques XSS - codificar
//     console.log(valor.length)
//     if (valor.length > 5) {
//         input.setCustomValidity("Este campo no puede contener más de 5 caracteres")//colocar un mensaje al input del html
//     }
// })

//PRACTICA 5
// let boton = document.querySelector("#boton")
// boton.addEventListener("click", (e) => {
//     e.preventDefault()
//     var dato = document.querySelector("input")
//     dato = dato.value
//     console.log(dato.length)
//     console.log(dato)
//     let tam = dato.length
//     for (var i = 0; i < tam; i++) {
//         let letra = dato[i]
//         if(letra == "a"){
//             console.log("Encontraste la letra a en " + i)
//         }
//     }
// })

//PRACTICA 6
// var contacto = document.getElementById("contacto")
// contacto.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target[0])
//     console.log(e.target[0].type)
//     console.log(e.target[0].value)
//     console.log(e.target.length)
//     var tam = e.target.length - 1
//     console.log(tam)
//     var item = e.target
//     var flag = false
//     for (var i = 0; i < tam; i++) {
//         if(item[i].value == ""){
//             alert("El campo " + item[i].name + " está vacío")
//             item[i].style.borderColor = "red"
//             break;
//         }else{
//             item[i].style.borderColor = "green"
//             if(i == (tam-1)){
//                 flag = true
//             }
//         }
//     }
//     if(flag == true){
//         //envío el formulario
//         e.target.submit()
//     }
// })

let letra = "A";
console.log(letra.charCodeAt())//devuelve el codigo ascii
//AQUI QUEDAMOS
