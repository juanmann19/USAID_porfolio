const E1 = document.getElementById('ejercicio1');
const E2 = document.getElementById('ejercicio2');
const E3 = document.getElementById('ejercicio3');
const E4 = document.getElementById('ejercicio4');
const E5 = document.getElementById('ejercicio5');
var ejercicio = document.getElementById('pais');
limpiar();

function limpiar(){
E1.style.display = 'none';
E2.style.display = 'none';
E3.style.display = 'none';
E4.style.display = 'none';
E5.style.display = 'none';

}

function showDiv(divId)
{
    limpiar();
    divId.style.display = 'block';
}

function mostrar(){
    var eleccion = parseInt(ejercicio.value);
    switch(eleccion){
        case 0:
            limpiar();
            break;
        case 1:
             showDiv(E1);
            break;
        case 2:
             showDiv(E2);
            break;
        case 3:
             showDiv(E3);
            break;
        case 4:
             showDiv(E4);
            break;
        case 5:
             showDiv(E5);
            break;
    }

}