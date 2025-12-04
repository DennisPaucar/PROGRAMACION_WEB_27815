


// llama al boton
var btn_conversion_m = document.getElementById('btn_conversion_m');


//Crear el evento click
btn_conversion_m.addEventListener('click',function(event){

    //llamanos a la caja de text
    let n1 = document.getElementById('txt_numero_uno_km').value;
    let resultado = document.getElementById('txt_resultado_m');

    //resultado 
    resultado.innerHTML = parseFloat(n1) *  1000 ;
    
});


