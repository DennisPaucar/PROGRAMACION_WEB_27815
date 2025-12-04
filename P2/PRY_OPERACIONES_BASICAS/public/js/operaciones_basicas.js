
// llama al boton
var btn_sumar = document.getElementById('btn_sumar');


//Crear el evento click
btn_sumar.addEventListener('click',function(event){

    //llamanos a la caja de text
    let n1 = document.getElementById('txt_numero_uno').value;
    let n2 = document.getElementById('txt_numero_dos').value;  
    let resultado = document.getElementById('txt_resultado');

    //resultado 
    resultado.innerHTML = parseFloat(n1) + parseFloat(n2);
});


