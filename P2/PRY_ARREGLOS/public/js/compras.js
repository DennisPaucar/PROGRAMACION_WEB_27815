var btn_agregar = document.getElementById('btn_agregar');
var ul_lista_productos = document.getElementById('lista_productos');
var ul_lista_productos_Mayus = document.getElementById('lista_productos_Mayus');
var lista_productos = [];

ul_lista_productos.innerHTML = '';
ul_lista_productos_Mayus.innerHTML = '';

btn_agregar.addEventListener('click', (event) =>{
    var nombre_producto = document.getElementById('txt_producto');

    if(nombre_producto.value!=''){
        lista_productos.unshift(nombre_producto.value);
        toUpperCase();
        mostrarListado();
        nombre_producto.value = '';
    }else{
        console.log('Por favor ingrese el nombre del producto')
    }
});

function mostrarListado(){

        ul_lista_productos_Mayus.innerHTML = '';

        lista_productos.forEach((producto)=>{
            let li_item = document.createElement('li');
            li_item.classList.add('list-group-item');
            li_item.textContent = producto;
            ul_lista_productos_Mayus.appendChild(li_item);

        })
}


function toUpperCase(){

    ul_lista_productos.innerHTML = '';

        lista_productos.map((producto)=>{
            
            let li_item = document.createElement('li');
            li_item.classList.add('list-group-item');
            li_item.textContent = producto.toUpperCase();
            ul_lista_productos.appendChild(li_item);

        })
}
