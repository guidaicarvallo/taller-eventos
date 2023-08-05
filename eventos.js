// En eventos.js agrega un manejador de eventos para el "click" en el div utilizando el método addEventListener. Debes programar que al dar click en el div salga una alerta con el texto "Hola! Soy el div".

const div = document.querySelector("div");
const btn = document.querySelector("button")

div.addEventListener("click", () => {
    alert("Hola! Soy el div");
})

btn.addEventListener("click", (e) => {
    e.stopPropagation();
});



