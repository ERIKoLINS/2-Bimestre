let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");
let btDescobrir = document.querySelector("#btDescobrir");
let resultado = document.querySelector("#resultado");

function encontrarMenor(){
    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);
    let vlr3 = Number(valor3.value);
    let vlr4 = Number(valor4.value);

    let menor = vlr1;

    if (vlr2 < menor){
        menor = vlr2;
    }

    if (vlr3 < menor){
        menor = vlr3;
    }

    if (vlr4 < menor){
        menor = vlr4;
    }

    resultado.textContent = 
    "o menor valor é " + menor;

}


btDescobrir.onclick = function(){
    encontrarMenor();
}