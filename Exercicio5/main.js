let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btDescobrir = document.querySelector("#btDescobrir");
let resultado = document.querySelector("#resultado");

function encontrarMaior(){
    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);

    let maior;

        if(vlr1 > vlr2){
        maior = vlr1;
        }else{
        maior = vlr2;
        }

    resultado.textContent = 
    "o maior valor é " + maior;

}


btDescobrir.onclick = function(){
    encontrarMaior();
}