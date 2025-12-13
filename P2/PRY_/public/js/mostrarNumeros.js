var btn_mostrar = document.getElementById('btn_mostrar_numeros');
var txt_mostrar = document.getElementById('txt_mostrar_resultado');




btn_mostrar.addEventListener('click',(event)=>{
    var txt_numero_final = parseInt(document.getElementById('txt_numero_final').value);
    var txt_numero_inicial = parseInt(document.getElementById('txt_numero_inicial').value);
    
    let numeros = "";

    for (let index = txt_numero_inicial; index <= txt_numero_final; index++) {
        numeros += `Numero ${index} impreso <br>`;

    }

    txt_mostrar.innerHTML = numeros;

});
