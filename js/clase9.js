//PRACTICA 1 FETCH CON JSON
// fetch("https://jsonplaceholder.typicode.com/users").then((respuesta1) => {
//     console.log(respuesta1)
//     return respuesta1.json()
// }).then((usuarios) => {
//     console.log(usuarios)
//     console.log(usuarios[2].id)
//     //document.querySelector("h1").innerHTML = usuarios[0].name
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuarios[2].id}`).then((respuesta2) => {
//         console.log(respuesta2)
//         return respuesta2.json()
//     }).then((posts)=>{
//         console.log(posts)
//         console.log(posts[0].title)
//         document.querySelector("h1").innerHTML = posts[0].title
//     })
// })

//PRACTICA 2
// let promesa = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open("get", "archivo.txt")
//     xhr.addEventListener("load", () => {
//         if (xhr.status == 200) {
//             resolve(xhr.response)
//         }
//     })
//     xhr.send()
// })
// promesa.then((valor) => {
//     console.log(valor)
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open("get", "archivo2.txt")
//         xhr.addEventListener("load", () => {
//             if (xhr.status == 200) {
//                 resolve(xhr.response + " " + valor)
//             }
//         })
//         xhr.send()
//     })
// }).then((valor)=>{
//     console.log(valor)
// }).catch(()=>{
//     console.log("Error")
// })

//PRACTICA 3 ASYNC
// async function leer(file) {
//     let x = await fetch(file)
//     console.log(x)
//     //console.log(x.text())
//     let y = await x.json()
//     console.log(y)
//     //y = JSON.parse(y)
//     console.log(y)
//     for(key in y){
//         console.log(y[key].name)
//         document.querySelector("h1").innerHTML += y[key].name +"<br>"
//     }
// }

// leer("https://jsonplaceholder.typicode.com/users")

//PRACTICA 4 - unir a dato.js y operaciones.js
// import { numero } from "./dato.js";
// import { sumar,restar } from './operaciones.js';
// console.log(numero)
// console.log(sumar(4,1))

//PRACTICA 5 geolocalización
// let boton = document.getElementById("encontrarme")
// boton.addEventListener("click", encontrarme)
// function encontrarme() {
//     let status = document.getElementById("status")
//     if (!navigator.geolocation) {
//         status.innerHTML = "La geolocalización no está disponible en tu navegador ;("
//     } else {
//         status.innerHTML = "Localizando..."
//         setTimeout(() => {
//             navigator.geolocation.getCurrentPosition(success, error)
//         }, 3000)
//     }
// }
// function success(position) {
//     console.log(position)
//     let latitud = position.coords.latitude
//     let longitud = position.coords.longitude
//     let a = document.querySelector("a")
//     //a.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`
//     a.href = `https://www.google.com.ar/maps/@${latitud},${longitud},14z?hl=es-419`
//     a.innerText = "Ver mapa"
//     a.target = "blank"
//     let map = document.querySelector("#map-link")
//     map.innerHTML = `Latitud: ${latitud}°, Longitud: ${longitud}°`
// }
// function error(){
//     console.log(error)
//     status.innerHTML = "No podemos obtener tu ubicación"
// }

//PRACTICA 6 OOP
let persona = {
    nombre: "Cleopatra",
    edad: 100,
    datos: function () {
        return `Hola ${this.nombre}`
    }
}
console.log(persona.nombre)
class Auto {
    //atributos, métodos
    marca;
    color;
    constructor(m, c) {
        this.marca = m
        this.color = c
    }
    informar(){
        return `La marca es ${this.marca} y el color ${this.color}`
    }
}
let x = new Auto("audi","rojo")
console.log(x.informar())
console.log(x.marca)
var y = new Auto("ford","negro")
console.log(y.informar())
