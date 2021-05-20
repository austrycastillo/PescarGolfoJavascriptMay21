// console.log("primer texto")
// setTimeout(() => {
//     console.log("segundo texto")
// }, 4000)
// console.log("tercer texto")
//ajax javascript asincrono y xml, 
//para realizar peticiones http

//PRACTICA 1
// let contenido = document.querySelector("#contenido")
// contenido.innerText = "Cargando..."
// setTimeout(()=>{
//     //paso 1 crear el objeto -> XHR
//     var ajax = new XMLHttpRequest()
//     //paso 2 abrir el archivo
//     ajax.open("get","archivo.txt")
//     //paso 3 cargar el archivo
//     ajax.onload = cargarArchivo
//     //paso 4 ejecutar
//     ajax.send()

//     function cargarArchivo(){
//         //paso opcional verificar el estatus del archivo
//         //objeto.status == 200 objeto.readyState == 4
//         if(ajax.status == 200){
//             //todo bien
//             console.log(ajax.responseText)
//             contenido.innerText = ajax.responseText
//         }else{
//             console.log("Error no puedo leer")
//             contenido.innerText = "Contenido no disponible ;("
//         }
//     }
// },3000)

//PRACTICA 2
// let boton = document.querySelector("button")
// let p = document.querySelector("#contenido")
// boton.addEventListener("click", () => {
//     let xhr = new XMLHttpRequest()
//     xhr.open("get", "template.html")
//     xhr.addEventListener("load", () => {
//         if (xhr.status == 200) {
//             let plantilla = xhr.response
//             let div = document.createElement("div")
//             div.innerHTML = plantilla
//             p.appendChild(div)
//         }else{
//             console.log("error no puedo leer")
//         }
//     })
//     xhr.send()
// })
let content = document.querySelector("#contenido")
let ajax = new XMLHttpRequest()
ajax.open("get", "info.json")
ajax.onload = cargarJSON
ajax.send()
function cargarJSON() {
    if (ajax.status == 200) {
        console.log("antes: ")
        console.log(ajax.responseText)
        let datos = JSON.parse(ajax.responseText)
        console.log("*********************")
        console.log("después: ")
        console.log(datos)
        console.log(datos[0].nombre)
        for (var i = 0; i < datos.length; i++) {
            var lista = document.createElement("ol")
            var items = "<li>" + datos[i].nombre +"</li><li>" + datos[i].apellido + "</li><li>" + datos[i].edad + "</li><li>" + datos[i].salario + "</li>"
            lista.innerHTML = items
            content.appendChild(lista)
        }
    } else {
        console.log("errorrr")
    }
}
