const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');
const asignatura = urlParams.get('asignatura');
const unid1 = urlParams.get('unid1');
const unid2 = urlParams.get('unid2');
const unid3 = urlParams.get('unid3');
const n1 = parseFloat(urlParams.get('n1'));
const n2 = parseFloat(urlParams.get('n2'));
const n3 = parseFloat(urlParams.get('n3'));
const n4 = parseFloat(urlParams.get('n4'));
const n5 = parseFloat(urlParams.get('n5'));
const n6 = parseFloat(urlParams.get('n6'));
const promediofinal = parseFloat(urlParams.get('promediofinal')); //Aca tal vez presente problemas.

document.getElementById('nombre').textContent = nombre;
document.getElementById('asignatura').textContent = asignatura;
document.getElementById('unid1').textContent = unid1;
document.getElementById('unid2').textContent = unid2;
document.getElementById('unid3').textContent = unid3;
document.getElementById('n1').textContent = n1;
document.getElementById('n2').textContent = n2;
document.getElementById('n3').textContent = n3;
document.getElementById('n4').textContent = n4;
document.getElementById('n5').textContent = n5;
document.getElementById('n6').textContent = n6;
document.getElementById('promedio').textContent = promediofinal.toFixed(1);

if(promediofinal >= 4){
    document.getElementById('mensaje').textContent = '¡Felicitaciones! Has aprobado la asignatura.';
}else{
    document.getElementById('mensaje').textContent = 'Lo siento, has reprobado la asignatura.';
}
