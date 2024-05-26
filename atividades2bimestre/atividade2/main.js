let quantPessoas = document.querySelector("#quantPessoas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular(){
    let vlr1 = quantPessoas.value * 2;
    let vlr2 = quantPessoas.value * 50;

    resultado.textContent = 
    " Serão necessários " + vlr1 + " ovos e " + vlr2 + "g de queijo.";

}

btCalcular.onclick = function(){
    calcular();
}