


// llama al boton
var btn_conversion_km = document.getElementById('btn_conversion_km');


//Crear el evento click
btn_conversion_km.addEventListener('click',function(event){

    //llamanos a la caja de text
    let n1 = document.getElementById('txt_numero_uno_m').value;
    let resultado = document.getElementById('txt_resultado_km');

    //resultado 
    resultado.innerHTML = parseFloat(n1) /  1000 ;
    
});


