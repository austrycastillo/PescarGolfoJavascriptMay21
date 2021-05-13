let datos = ["uno", "dos", true, 20, "tres"];
// datos.forEach(elemento => {
//     console.log(elemento)
// })
//live-server
//for of 
// for(elemento of datos){
//     console.log(elemento)
// }
// var cliente = {
//     nombre: 'Ricardo',
//     apellido: 'Corti',
//     edad: 70
// };
//for in 
// for (clave in cliente) {
//     console.log(clave + ": " + cliente[clave])
// }
//boom(window) y el dom

// h1 = document.querySelector("#titulo")
// console.log(h1)
// h1 = document.querySelector(".ti")
// console.log(h1)
// h1 = document.getElementById("titulo")
// console.log(h1)
// h1 = document.getElementsByClassName("ti")[0]
// console.log(h1)
// let h1 = document.querySelector("h1")
// console.log(h1)
// //alert(h1.innerHTML)
// h1.innerHTML = "Hola desde js"
// let parr = document.querySelector("#parr")
// parr.innerText = "Hola soy fuerte 2 des js"
// parr.innerHTML = "Hola <strong>soy fuerte </strong>2 des js"
// console.log(h1.id)
// h1.title = "soy el titulo"
// console.log(h1)
// h1.style.backgroundColor = "lightpink"
// h1.style.color = "red"
// h1.style.border = "1px solid blue"
// h1.style.padding = "50px"
//creando elementos: 
/*
paso 1-> crear el elemento: createElement
paso 2-> opcional, agregar contenido
paso 3-> confirmar el lugar: appendChild
*/
// var div = document.createElement("div")
// div.innerHTML = "<p>Soy un nuevo div con párrafo</p>"
// document.body.appendChild(div)

// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.innerText = "Comodoro es hermoso"
// ul.appendChild(li)

// li = document.createElement("li")
// li.innerText = "segundo texto"
// ul.appendChild(li)

// li = document.createElement("li")
// li.innerText = "tercer"
// ul.appendChild(li)
// let ul = document.querySelector("ul")
// var items = [
//     "primer item",
//     "segundo item",
//     "tercer item"
// ]
// for (item of items) {
//     console.log(item)
//     var li = document.createElement("li")
//     li.innerText = item
//     ul.appendChild(li)
// }
/*
crear un hipervinculo para la web de ____
debe abrir en una nueva ventana
poner un titulo
*/
// let a = document.createElement("a")
// a.innerText = "Visitar Google" //document.createTextNode(aqui el texto)
// a.href = "https://www.google.com/"
// a.target = "blank"
// a.title = "Click para ir a google"
// var li = document.createElement("li")
// li.appendChild(a)
// ul.appendChild(li)

// setInterval(function () {
//    // alert("Holaaa set Interval")
//    //console.log("Hola set Interval")
// }, 3000);

// function activar(){
//     var progreso=document.getElementById("caja2");
//     var width=0;
//     var intervalo=setInterval(rellenar,1000);
//     function rellenar(){
//         var n=Math.random() * (10 - 1) + 1;
//         if(width<=100){
//         console.log(width);
//         width=width+n;
//         progreso.style.width=width+"%";
//         }
//         if(width>100){
//             width=100;
//             progreso.style.width=width+"%";
//             clearInterval(intervalo);
//         }


//     }

// }

var boton = document.querySelector("button");
// boton.onclick = () => {
//     var p = document.createElement("p");
//     p.innerText = "Soy un párrafo creado con eventos";
//     document.body.appendChild(p);
// }

// boton.addEventListener("click", function () {
//     var p = document.createElement("p");
//     p.innerText = "Soy un párrafo creado con eventos";
//     document.body.appendChild(p);
// });

boton.addEventListener("click", ()=> {
    var p = document.createElement("p");
    p.innerText = "Soy un párrafo creado con eventos";
    document.body.appendChild(p);
});