

// llama al boton
var btn_resta = document.getElementById('btn_restar');


//Crear el evento click
btn_resta.addEventListener('click',function(event){

    //llamanos a la caja de text
    let n1 = document.getElementById('txt_numero_uno_resta').value;
    let n2 = document.getElementById('txt_numero_dos_resta').value;  
    let resultado = document.getElementById('txt_resultado_resta');

    //resultado 
    resultado.innerHTML = parseFloat(n1) -  parseFloat(n2);
});


