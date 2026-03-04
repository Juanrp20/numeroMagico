let numeroMagico = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    let mensaje = document.getElementById("mensaje");

    if (numeroUsuario < numeroMagico) {
        mensaje.textContent = " Maaaaaaas";
        mensaje.style.color = "orange";
    } else if (numeroUsuario > numeroMagico) {
        mensaje.textContent = " Menooooooos";
        mensaje.style.color = "orange";
    } else {
        mensaje.textContent = " ¡Correcto! Adivinaste el numero mágico";
        mensaje.style.color = "green";
    }
}