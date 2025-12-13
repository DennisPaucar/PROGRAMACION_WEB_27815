
var txt_mostrar_resultado_pares = document.getElementById('lista_pares');

var txt_mostrar_resultado_impares = document.getElementById('lista_impares');

var btn_calcular = document.getElementById('btn_calcular');

btn_calcular.addEventListener('click',(event)=>{
    var txt_numero_inicial = document.getElementById('txt_numero_inicial').value;
    var txt_numero_final = document.getElementById('txt_numero_final').value;

    

    let numeros_pares = "";
    let numeros_impares = "";

    for(let i = txt_numero_inicial; i <= txt_numero_final;i++){

        if(txt_numero_inicial%2 == 0){
            txt_numero_inicial++;
            numeros_pares += `Número ${i} es par <br>`;
        }else {
            txt_numero_inicial++;
            numeros_impares += `Número ${i} es impar <br>`;
        }

    }

    txt_mostrar_resultado_pares.innerHTML = numeros_pares;
    txt_mostrar_resultado_impares.innerHTML = numeros_impares;
})


document.getElementById('btn_limpiar').addEventListener('click',(event)=>{
    document.getElementById('txt_numero_inicial').value='';
    document.getElementById('txt_numero_final').value='';

    txt_mostrar_resultado_impares.innerHTML='';
    txt_mostrar_resultado_pares.innerHTML='';
})



