alert("Bienvenido a mi portafolio");
const boton = document.getElementById("btnContacto");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    console.log("Alguien hizo clic en contacto");
});

boton.addEventListener("click", function() {
    mensaje.innerHTML = "Gracias por contactarme. Te responderé pronto.";
});    