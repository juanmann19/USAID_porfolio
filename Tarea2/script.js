let colorFondo = document.getElementById("fondo");
let colorFuente = document.getElementById("fuente");
let tamano = document.getElementById("tamano");
let prueba = document.getElementById("texto_prueba");


const pretFondo = "#ffffff";
const pretFuente = "#000000";
const pretTamano = 16 + "px";

function AplicarCambios(){
    prueba.style.backgroundColor = colorFondo.value;
    prueba.style.color = colorFuente.value;
    prueba.style.fontSize = tamano;
}
function CambiarTamano(){
    let unidad = "px";
    prueba.style.fontSize = tamano.value + unidad;
}

function RevertirCambios(){
    colorFondo.value = "#ff0000";
    colorFuente.value = "#00ff00";
    tamano.value = 25;
    prueba.style.backgroundColor = pretFondo;
    prueba.style.color = pretFuente;
    prueba.style.fontSize = pretTamano;
}
