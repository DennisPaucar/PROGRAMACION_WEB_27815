

// llama al boton
var btn_multiplicacion = document.getElementById('btn_multiplicar');


//Crear el evento click
btn_multiplicacion.addEventListener('click',function(event){

    //llamanos a la caja de text
    let n1 = document.getElementById('txt_numero_uno_multi').value;
    let n2 = document.getElementById('txt_numero_dos_multi').value;  
    let resultado = document.getElementById('txt_resultado_multi');

    //resultado 
    resultado.innerHTML = parseFloat(n1) *  parseFloat(n2);
    
});


