// PRACTICA 1
//const xhrArrancar = document.querySelector(".xhr-arrancar")
// const xhrError = document.querySelector(".xhr-error")
// const xhrAbortar = document.querySelector(".xhr-abortar")
// const log = document.querySelector("#log")

// xhrArrancar.addEventListener("click", () => {
//     armarXHR("leon.jpg")
// })
// xhrError.addEventListener("click", () => {
//     armarXHR("https://xcosaquenoexistaeninternetlol/noestoy")
// })
// xhrAbortar.addEventListener("click", () => {
//     armarXHR("ajax-status-valores.jpg").abort()
// })
// function armarXHR(url) {
//     log.textContent = ""
//     const xhr = new XMLHttpRequest()
//     agregarEventos(xhr)
//     xhr.open("get", url)
//     xhr.send()
//     return xhr
// }
// function agregarEventos(xhr) {
//     xhr.addEventListener("loadstart", imprimirLog)
//     xhr.addEventListener("progress", imprimirLog)
//     xhr.addEventListener("load", imprimirLog)
//     xhr.addEventListener("loadend", imprimirLog)
// }
// function imprimirLog(e) {
//     setTimeout(function () {
//         console.log(e)
//         log.textContent = log.textContent + `${e.type}: ${e.loaded} - `
//     }, 2000)
// }

//PRACTICA 2
// var boton = document.querySelector("#boton")
// var nombre = document.querySelector("#nombre")

// boton.addEventListener("click", (e) => {
//     e.preventDefault()
//     activarAjax("https://jsonplaceholder.typicode.com/users")
// })
// function activarAjax(url) {
//     let xhr = new XMLHttpRequest()
//     xhr.open("get", url)
//     xhr.addEventListener("load",()=>{
//         if(xhr.status == 200){
//             //console.log(xhr.responseText)
//             actualizar(xhr.responseText)
//         }
//     })
//     xhr.send()
// }
// function actualizar(json){
//     boton.classList.remove("btn-primary")
//     boton.classList.add("btn-danger")
//     let contenido = JSON.parse(json)
//     //console.log(json)
//     //console.log(contenido)
//     console.log(contenido[0].name)
//     nombre.innerHTML = contenido[0].name
// }

//PRACTICA 3
// let form = document.forms.namedItem("form")
// form.addEventListener("submit", e => {
//     e.preventDefault()
//     // console.log(form[0].value)
//     // console.log(form[1])
//     let campos = new FormData()//interfaz fe form para trabajar con clave:valor
//     campos.append("comentario",form.comentario.value)
//     campos.append("archivo",form.archivo.value)
//     for(item of campos){
//         console.log(item[0] + ' -> ' + item[1])
//     }
// })

//PRACTICA 4
let input = document.querySelector("input[type=file]")
let vistaPrevia = document.querySelector("#vistaPrevia")
input.addEventListener("change", (e) => {
    console.log(e.target.files[0])
    let url = URL.createObjectURL(e.target.files[0])
    console.log(url)
    //vistaPrevia.src = url
    vistaPrevia.setAttribute("src", url)
})