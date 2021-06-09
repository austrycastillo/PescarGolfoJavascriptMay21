let form = document.getElementById("formulario")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("me diste click")
    let datos = new FormData(form)
    console.log(datos)
    console.log(datos.get("juego"))
    console.log(datos.get("precio"))
    console.log(datos.get("correo"))
    fetch("procesar.php", {
        method: "POST",
        body: datos
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
})