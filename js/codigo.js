function convertir(cantidad, cambio) {
    let resultado = cantidad * cambio;
    return resultado;
}

var cambio_yen = 125;
var cambio_yen2 = 125;
window.onload = inicio;

function inicio() {
    document.getElementById("input_cambio").value = cambio_yen;
    document.getElementById("boton").onclick = ir_a_convertir;
    document.getElementById("dinero").onkeydown = teclado;

    // Add an event listener to the input field for euros
    const dineroInput = document.getElementById("dinero");
    dineroInput.addEventListener("input", validateInput);
}

function validateInput(event) {
    // Get the input value and remove any non-numeric characters
    let inputValue = event.target.value.replace(/[^\d.]/g, '');

    // Update the input value with the cleaned numeric value
    event.target.value = inputValue;
}

function teclado(a) {
    let codigo_tecla = a.keyCode;
    if (codigo_tecla == 13) {
        ir_a_convertir();
    }
}

function ir_a_convertir() {
    cambio = document.getElementById("input_cambio").value;
    cantidad = document.getElementById("dinero").value;
    cantidad = (cantidad !== "") ? cantidad : 1;
    a = convertir(cantidad, cambio);
    document.getElementById("conversiones").innerHTML += cantidad + " euros son " + a + " yenes<br>";
    document.getElementById("dinero").value = "";
    document.getElementById("dinero").focus();
}
