//PRACTICA 1 ****PENDIENTE CON EL FILEREADER, VERIFICAR
// let caja = document.getElementById("caja")
// caja.addEventListener("dragover", (e) => {
//     e.preventDefault()
//     //console.log(e)
// })
// caja.addEventListener("drop", (e) => {
//     e.preventDefault()
//     //console.log(e)
//     let archivo = new FileReader()//leer ficheros
//     archivo.addEventListener("load", (e) => {
//         console.log(e.target.result)
//         caja.style.backgroundImage = "url('" + e.target.result + "')"
//     })
//     archivo.readAsDataURL(e.dataTransfer.files[0])
//     console.log(e.dataTransfer.files[0].name)
// })

//PRACTICA 2
// let caja1 = document.querySelector("#caja1")
// let caja2 = document.querySelector("#caja2")
// let caja3 = document.querySelector("#caja3")
// let leon = document.querySelector("#leon")
// caja1.addEventListener("dragover", ejecutarDrag)
// caja2.addEventListener("dragover", ejecutarDrag)
// caja3.addEventListener("dragover", ejecutarDrag)
// caja1.addEventListener("drop", ejecutarDrop)
// caja2.addEventListener("drop", ejecutarDrop)
// caja3.addEventListener("drop", ejecutarDrop)
// leon.addEventListener("dragstart", drag)
// function ejecutarDrag(e) {
//     e.preventDefault()
// }
// function drag(e) {//arrastrando
//     // console.log(e.dataTransfer)
//     // console.log(e.target.id)
//     e.dataTransfer.setData("text", e.target.id)
// }
// function ejecutarDrop(e) {//soltar
//     console.log(e.dataTransfer.getData("text"))
//     console.log(e.target)
//     let data = e.dataTransfer.getData("text")
//     console.log(data)
//     e.target.appendChild(document.getElementById(data))

// }

//PRACTICA 3 INICIANDO PROMESAS -> THEN (RESUELVE) CATCH(RECHAZADA) FINALLY
// let promesa = new Promise((resolve, reject)=>{
//     console.log("Estamos iniciando promesas...")
//     var x = 10
//     console.log(x)
//     if(x > 5){
//         throw new Error("Ups! no aceptamos números mayores a 5")
//     }
//     resolve()
// })
// promesa.then(()=>{
//     console.log("buenísimo se resolvió ;)")
// }).catch((rta)=>{
//     console.log(rta)
// })

//PRACTICA 4
// let promesa = new Promise((resolve, reject) => {
//     console.log("Iniciando...")
//     var a = 10
//     setTimeout(() => {
//         a > 5 ? resolve("perfecto") : reject("no salió")
//     }, 1000)
// })
// promesa.then((valor)=>{
//     console.log(valor + " lo hiciste!")
// }).catch((rta)=>{
//     console.log(rta + " a llorar ;(")
// }).finally(()=>{
//     console.log("finalizando...")
// })

//PRACTICA 5
// function activar() {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open("get", "https://picsum.photos/v2/list")
//         xhr.addEventListener("load", () => {
//             if (xhr.status == 200) {
//                 resolve(JSON.parse(xhr.response))
//             } else {
//                 reject("Uh no ;(")
//             }
//         })
//         xhr.send()
//     })
// }
// let padre = document.querySelector("#padre")
// activar().then(r => {
//     //console.log(r[0].author)
//     console.log(r)
//     //h1.innerHTML = r[0].author
//     for(key in r){
//         let img = document.createElement("img")
//         let div = document.createElement("div")
//         let h1 = document.createElement("h1")
//         h1.innerHTML += r[key].author + "<br>"
//         div.appendChild(h1)
//         img.src = r[key].download_url
//         img.style.width = "inherit"
//         div.appendChild(img)
//         padre.appendChild(div)
//     }
// }).catch((r) => {
//     console.log(`Algo salió mal ${r}`)
// }).finally(()=>{
//     console.log("FIN")
// })

/*PRACTICA 6 FETCH API: obligado un parametro que sería la ruta del recurso, me devuelve una promesa
*/
let btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    fetch("archivo.txt").then((respuesta) => {
        console.log(respuesta)
        if (respuesta.ok) {
            respuesta.text().then((datos) => {
                console.log(datos)
            })
        }else{
            mostrarError(respuesta.status)
        }
    }).catch(mostrarError)
})
function mostrarError(err){
    console.log("muestro el error " + err)
}
