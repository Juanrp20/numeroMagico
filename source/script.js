let numeroMagico = Math.floor(Math.random() * 100) + 1;
let intento = 1;
let maxIntentos = 10;
let intentosAnteriores = [];

function adivinar() {

    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    let mensaje = document.getElementById("mensaje");
    let lista = document.getElementById("listaIntentos");

    if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = "Ingresa un numero valido entre 1 y 100";
        mensaje.style.color = "red";
        return;
    }

    intentosAnteriores.push(numeroUsuario);

    let item = document.createElement("li");
    item.textContent = numeroUsuario;
    lista.appendChild(item);

    if (numeroUsuario === numeroMagico) {

        mensaje.textContent = "Correcto. Adivinaste el numero magico";
        mensaje.style.color = "green";
        terminarJuego();

    } else if (intento >= maxIntentos) {

        mensaje.textContent = "Juego terminado. El numero era " + numeroMagico;
        mensaje.style.color = "red";
        terminarJuego();

    } else {

        if (numeroUsuario < numeroMagico) {
            mensaje.textContent = "El numero magico es MAYOR";
        } else {
            mensaje.textContent = "El numero magico es MENOR";
        }

        mensaje.style.color = "orange";
        intento++;
        document.getElementById("intentos").textContent = intento;
    }

    document.getElementById("numeroUsuario").value = "";
}

function terminarJuego() {
    document.getElementById("numeroUsuario").disabled = true;
    document.querySelector("button[type='submit']").disabled = true;
    document.getElementById("reiniciar").style.display = "inline-block";
}

function reiniciarJuego() {

    numeroMagico = Math.floor(Math.random() * 100) + 1;
    intento = 1;
    intentosAnteriores = [];

    document.getElementById("mensaje").textContent = "";
    document.getElementById("intentos").textContent = "1";
    document.getElementById("listaIntentos").innerHTML = "";

    document.getElementById("numeroUsuario").disabled = false;
    document.querySelector("button[type='submit']").disabled = false;
    document.getElementById("numeroUsuario").value = "";

    document.getElementById("reiniciar").style.display = "none";
}
