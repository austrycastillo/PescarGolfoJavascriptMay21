//PRACTICA 1
// let form = document.querySelector("form")
// let span = document.querySelector("span")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     //console.log(e.target[0].value)
//     let valor = e.target[0].value
//     let tam = valor.length
//     //console.log(tam)
//     let flag = false
//     for (var i = 0; i < tam; i++) {
//         var letra = valor[i]
//         //console.log(letra)
//         var codigo = letra.charCodeAt()
//         //console.log(codigo)
//         console.log(`${letra} --> ${codigo}`)
//         if (codigo >= 97 && codigo <= 122) {
//             console.log("si")
//         } else {
//             console.log("no")
//             flag = true
//         }
//     }
//     let dato = flag ? "Incorrecto" : "Correcto"
//     span.innerHTML = dato
//     if (dato == "Correcto") {
//         span.classList.add("Correcto")
//         span.classList.remove("Incorrecto")
//     } else {
//         span.classList.add("Incorrecto")
//         span.classList.remove("Correcto")

//     }


// })

//PRACTICA 2
// let exp = /amor/ //expresión literal
// exp = /[Aa]mor/ // []digitos en específicos
// exp = /[a-z,A-Z0-9]/ //rango de letras
// exp = /[0-9]/ 
// exp = /[a-zA-Z]/
// exp = /[a-z\D]/
// exp = /^[a-z0-9]+$/ //^inicio  $final 
// exp = /^.{4,6}$/ // . cualquier caracter
// exp = /^[A-Z]{4}$/ //{} rango min, max
// exp = /^[A-Z]{4,8}$/
//exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
// console.log(exp.test("as@corr.com"))

//FORMULARIO
let datos = {

}
let exp = {
    nombre:/^[a-zA-Z]{3,10}$/,
    clave:/^[a-zA-Z0-9]{3,10}$/,
    correo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/
}
let form = document.getElementById("form")
let inputs = document.querySelectorAll("input")
let verificar = (e)=>{
    //console.log(e.target.name)
    switch(e.target.name){
        case "nombre":
            if(exp.nombre.test(e.target.value)){
                console.log("estoy en if")
                document.querySelector("#nombre").classList.add("i-correcto")
                document.querySelector("#nombre").classList.remove("i-incorrecto")
            }else{
                console.log("estoy en el else")
                document.querySelector("#nombre").classList.add("i-incorrecto")
                document.querySelector("#nombre").classList.remove("i-correcto")
            }
        break;
    }
}
inputs.forEach((item) => {
    item.addEventListener("keyup", verificar)
})