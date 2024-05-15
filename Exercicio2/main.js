let kg = document.querySelector("#kg");
let valorkg = document.querySelector("#valorkg");
let btCalcular = document.querySelector("#btCalcular");

function calcularValor(){
    let Resultado = kg.value * valorkg.value;
    alert(Resultado)
}

btCalcular.onclick = function(){
    calcularValor();
}