/*
var, let, const
live-server
*/
// var nombre = "Juan";//declarando e inicializando (tipo string)
// var edad = 20;//number: int, double, float
// var result = true;//boolean
// var c;//undefined
// var a = [20,21,"Ana",false]; //arreglo
// var b = {
//     nombre: "Luis",
//     edad: 80
// }; //objeto
// console.log(a);
// console.log(b);
// console.log(b.nombre);
// console.log(b["nombre"]);
/*
var-> redeclarable, redefinible, scope global
let-> no redeclarable, redefinible, scope local
const->no redeclarable, no redefinible, scope local
*/
// var x = 2;
// console.log(x);
//                 if(true){
//                     console.log(x);
//                     var x = 4;
//                     console.log(x);
//                 }
// console.log(x);
// var x = 6;
// console.log(x);

// let x = 2;
// console.log(x);
//                 if(true){

//                     let x = 4;
//                     console.log(x);
//                 }
// console.log(x);
// //let x = 6;//no puedo volver a declarar
// x = 6;
// console.log(x);

// const x = 2;
// console.log(x);
//                 if(true){
//                     const x = 4;
//                     console.log(x);
//                 }
// console.log(x);
// //const x = 6;//no puedo declarar otra vez
// //x = 6;//no puedo modificar su valor
// console.log(x);

//funciones
function mostrar() {
    console.log("Hola función sin argumentos");
}
function mostrar2() {
    let mensaje = "Hola función";
    return mensaje;
}
function saludar(nombre = "Pedro") {
    console.log("Hola " + nombre);
}
function sumar(a, b, c) {
    return a + b + c;
}
mostrar();
console.log(mostrar2());
saludar();
saludar("Pablo");
//var n = window.prompt("Escribe tu nombre");
//saludar(n);
console.log(sumar(2, 5, 3));
//función anónima
let fun = function () {
    console.log("soy anónima");
}
fun();
//función flecha o lambda 
var fun2 = () => {
    console.log("soy flecha");
}
fun2();
var fun3 = nombre => console.log("soy flecha " + nombre);

fun3("Luis");