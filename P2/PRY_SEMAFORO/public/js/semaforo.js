var radio_rojo = document.getElementById('radio_rojo');
var radio_amarillo = document.getElementById('radio_amarillo');
var radio_verde = document.getElementById('radio_verde');
var txt_resultado = document.getElementById('txt_resultado')

radio_rojo.addEventListener('change',(event)=>{
    txt_resultado.textContent = "Detenganse !!"
});


radio_amarillo.addEventListener('change',function(event){
    txt_resultado.textContent = "Cuidado !!"
});


radio_verde.addEventListener('change',function(event){
    txt_resultado.textContent = "Avance !!"
    
});