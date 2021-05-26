let main = document.querySelector("main")
let enlaces = document.querySelectorAll("a")
enlaces.forEach(link => {
    //console.log(link)
    link.addEventListener("click", (e) => {
        e.preventDefault()
        //console.log(e.target.href)
        var archivo = e.target.href
        cargarTemplate(archivo)
    })
})

function cargarTemplate(archivo) {
    let xhr = new XMLHttpRequest()
    xhr.open("get", archivo)
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            //console.log(xhr.responseText)
            let plantilla = xhr.responseText
            main.innerHTML = plantilla
        }
    })
    xhr.send()
}
