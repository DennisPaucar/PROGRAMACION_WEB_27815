    var btn_cargar_datos = document.getElementById('btn_cargar_datos');
    var btn_limpiar = document.getElementById('btn_limpiar_datos');

    btn_cargar_datos.addEventListener('click',(event)=>{
        let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

        let contador_aprobados = 0;
        let contador_supletorio = 0;
        let contador_reprobados = 0;
        let suma_notas = 0;
        let promedio;
        let estado_curso = "";
        let estado_descripcion = "";

        for(let i = 0; i<notas.length;i++){
            let nota = notas[i];
            suma_notas += nota;


            if(nota>=7 && nota<=10){
                contador_aprobados++;
            }else if(nota>=5 && nota <=6){
                contador_supletorio++;
            }else if(nota >=0 && nota <=4){
                contador_reprobados++;
            }
            
        }

        promedio = suma_notas / notas.length;

        if (promedio >= 7){
            estado_curso = "APROBADO";
            estado_descripcion = "El curso está aprobado ";
            document.getElementById('estado_curso_card').classList.add('text-white', 'estado-aprobado');
            document.getElementById('estado_curso_header').style.background = 'rgba(17, 153, 142, 0.9)';
        }else{
            estado_curso = "EN RIESGO";
            estado_descripcion = "El curso esta en riesgo";
            document.getElementById('estado_curso_card').classList.add('text-white','estado-riesgo');
            document.getElementById('estado_curso_header').style.background = 'rgba(235, 51, 73, 0.9)';
        }

        document.getElementById('total_aprobados').textContent = contador_aprobados;
        document.getElementById('total_supletorios').textContent = contador_supletorio;
        document.getElementById('total_reprobados').textContent = contador_reprobados;

        document.getElementById('promedio_curso').textContent = promedio;
        document.getElementById('estado_curso').textContent = estado_curso;
        document.getElementById('estado_curso_descripcion').textContent = estado_descripcion;

        console.log(suma_notas)
        console.log(contador_aprobados);
        console.log(contador_reprobados);
        console.log(contador_supletorio);
        console.log(promedio)

    });

    btn_limpiar.addEventListener('click',(event)=>{
        document.getElementById('total_aprobados').textContent = '';
        document.getElementById('total_supletorios').textContent = '';
        document.getElementById('total_reprobados').textContent = '';

        document.getElementById('promedio_curso').textContent = '';
        document.getElementById('estado_curso').textContent = '';
        document.getElementById('estado_curso_descripcion').textContent = '';

        document.getElementById('estado_curso_card').classList.remove('text-white','estado-riesgo','estado-aprobado');
        
        document.getElementById('estado_curso_header').style.background = '';
        
    })

