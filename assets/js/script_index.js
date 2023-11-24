function sumar(){
    var nombre = document.getElementById("nombre").value;
    var asignatura = document.getElementById("asignatura").value;
    if(nombre.length<4){
        alert("Favor ingrese un nombre con más de 4 carácteres.");
        return false;
    }
    if(asignatura.length<4){
        alert("Favor ingrese una asignatura con más de 4 carácteres.");
        return false;
    }

    var unid1 = document.getElementById("unid1").value;
    var unid2 = document.getElementById("unid2").value;
    var unid3 = document.getElementById("unid3").value;  
    if(unid1.length==""){
        alert("Favor ingrese un nombre a Unidad 1.");
        return false;
    }
    if(unid2.length==""){
        alert("Favor ingrese un nombre a Unidad 2.");
        return false;
    }
    if(unid3.length==""){
        alert("Favor ingrese un nombre a Unidad 3.");
        return false;
    }

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);
    var n6 = parseFloat(document.getElementById("n6").value);
    var notas = [n1, n2, n3, n4, n5, n6];
    for(let i=0; i<6; i++){
        if(isNaN(notas[i])){
            alert("Completa todos los campos y asegúrate de ingresar valores numéricos.");
            return false;
        }
        if(notas[i] > 7 || notas[i] < 1){
            alert("Las notas no pueden ser menores a 1.0 o mayores a 7.0; ingresa notas válidas dentro del rango.");
            return false;
        }
    }
    var pond1 = parseFloat(document.getElementById("pond1").value) / 100;
    var pond2 = parseFloat(document.getElementById("pond2").value) / 100;
    var pond3 = parseFloat(document.getElementById("pond3").value) / 100;
    var pond4 = parseFloat(document.getElementById("pond4").value) / 100;
    var pond5 = parseFloat(document.getElementById("pond5").value) / 100;
    var pond6 = parseFloat(document.getElementById("pond6").value) / 100;
    var pond = [pond1, pond2, pond3, pond4, pond5, pond6];
    var promediofinal = 0;
    for(let i=0; i<6; i++){
        var ponderacion = parseFloat(notas[i]) * parseFloat(pond[i]);
        var promediofinal = parseFloat(ponderacion) + parseFloat(promediofinal)
    }
    //promediofinal contiene el promedio final del alumno.
    let resultadoURL = `./resultados.html?nombre=${nombre}&asignatura=${asignatura}&n1=${n1}&n2=${n2}&n3=${n3}&n4=${n4}&n5=${n5}&n6=${n6}&promediofinal=${promediofinal}&unid1=${unid1}&unid2=${unid2}&unid3=${unid3}`;
    window.location.href = resultadoURL;
}
