//API REST
/*REST: transferencia de representación de estado,
arquitectura de soft, lógica, conj de restricciones aplicaciones web basadas en http,
interfaz, normas, sistema para obtener datos, generar datos
RESTFUL: programa basada en REST (servicios web)
API: interfaz de programación de aplicaciones, diccionario, conjunto de difiniciones, normas, protocolos para desarrollar aplicaciones, reutilizar servicios ya creados, funciones, procedimientos
API REST: interfaz para transferir datos
SPA: aplicación de una sola página
*/

let a = document.querySelectorAll("a")
a.forEach(link => {
    //console.log(link.classList[0])
    let clase = link.classList[0]
    link.addEventListener("click", (e) => {
        e.preventDefault()
        history.pushState(
            {
                tabClase: clase
            },null
        )
        let p = document.querySelectorAll("p")
        p.forEach(parr => {
            //console.log(parr.id)
            let id = parr.id
            if (clase == id) {
                parr.classList.add("visible")
                parr.classList.remove("invisible")
                // parr.classList.toggle("invisible")
            } else {
                parr.classList.add("invisible")
                parr.classList.remove("visible")
            }
        })
    })
})

window.addEventListener("popstate",function(e){
    console.log(e.state.tabClase)
    let clase = e.state.tabClase
    let p = document.querySelectorAll("p")
    p.forEach(parr => {
        //console.log(parr.id)
        let id = parr.id
        if (clase == id) {
            parr.classList.add("visible")
            parr.classList.remove("invisible")
            // parr.classList.toggle("invisible")
        } else {
            parr.classList.add("invisible")
            parr.classList.remove("visible")
        }
    })
})