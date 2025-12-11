var semaforos1 = document.querySelectorAll('input[name="luz"]:checked');
var txt_resultado = document.getElementById('txt_resultado');
var semaforos = document.querySelectorAll('input[name="luz"]');


if (semaforos1.length) {

    let id_Seleccionado = "";

    for (var i = 0; i < semaforos1.length; i++) {
        id_Seleccionado = semaforos1[i].id;
    }

    if (id_Seleccionado === 'radio_rojo') {
        txt_resultado.textContent = 'Deténganse !!';
    } else if (id_Seleccionado === 'radio_amarillo') {
        txt_resultado.textContent = 'Cuidado !!';
    } else {
        txt_resultado.textContent = 'Avance !!';
    }
}


for (var i = 0; i < semaforos.length; i++) {

    semaforos[i].addEventListener('click', function(e){

        let id_elemento = e.target.id;

        switch(id_elemento){
            case 'radio_rojo': 
                txt_resultado.textContent = 'Deténganse !!';
                break;
            case 'radio_amarillo': 
                txt_resultado.textContent = 'Cuidado !!';
                break;
            case 'radio_verde': 
                txt_resultado.textContent = 'Avance !!';
                break;
            default: 
                break;
        }

    });
}
