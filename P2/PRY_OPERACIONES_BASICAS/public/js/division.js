

// llama al boton
var btn_division = document.getElementById('btn_dividir');


//Crear el evento click
btn_division.addEventListener('click',function(event){

    //llamanos a la caja de text
    let n1 = document.getElementById('txt_numero_uno_div').value;
    let n2 = document.getElementById('txt_numero_dos_div').value;  
    let resultado = document.getElementById('txt_resultado_div');

    //resultado 
    resultado.innerHTML = parseFloat(n1) /  parseFloat(n2);
    
});


