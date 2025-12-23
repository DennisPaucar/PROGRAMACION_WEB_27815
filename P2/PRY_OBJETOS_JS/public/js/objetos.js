// Declarar un object

var persona = {
    cedula : "0593652349",
    nombres: "Dennis Samael",
    appellidos : "Paucar Paucar",
    edad : 200,
    estatura : 1.66,
    es_ecuatoriano : true,
    mis_asignaturas : [
                        'Programacion WEB', 
                        'Aplicaciones WEB',
                        'Arquitectura SW'
                      ],
    fn_saludar : function(){
       return `Hola mi nombre es ${this.nombres} ${this.appellidos}`
    },
    fn_calcularEdad : function(){
        return this.edad>=18 ? 'Soy mayor de edad':'Soy menor de edad';     
    }
};


var header_infor = document.getElementById('header_info');
var body_infor = document.getElementById('txt_mayor_edad');
header_infor.innerHTML = `${persona.fn_saludar()}`;
body_infor.innerHTML = `${persona.fn_calcularEdad()}`;

var mis_asignaturas_elementHTML = document.getElementById('mis_asignaturas');
var datos_txt = document.getElementById('txt_datos');

persona.mis_asignaturas.forEach(materia => {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = materia;
    mis_asignaturas_elementHTML.appendChild(li);
})

datos_txt.textContent = `hola`