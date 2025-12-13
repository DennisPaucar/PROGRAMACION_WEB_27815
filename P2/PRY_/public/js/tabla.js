var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');
var txt_mostrar_resultado = document.getElementById('txt_mostrar_resultado');

btn_mostrar_tabla.addEventListener('click',function(event){
    var txt_numero_tabla = parseInt(document.getElementById('txt_numero_tabla').value);

    if(!isNaN(txt_numero_tabla)){
        let tabla2="";  
        
        for(let i = 1; i<= 12;i++){
            // let tabla1 = txt_numero_tabla + "x" + i + "=" + (txt_numero_tabla*i);
            // console.log(tabla1);
            tabla2 += `${txt_numero_tabla} x ${i} = ${txt_numero_tabla*i} <br>`;
            
        }

        txt_mostrar_resultado.innerHTML = tabla2;

    }else{
        txt_mostrar_resultado.textContent = "Ingrese un numero válido"
    }

    
});

document.getElementById('btn_limpiar').addEventListener('click',(event)=>{
    document.getElementById('txt_numero_tabla').value='';
    txt_mostrar_resultado.innerHTML='';
    
});