let valorDolar = document.querySelector("#valorDolar");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular(){
    let cot1 = valorDolar.value * (1/100);
    let cot2 = valorDolar.value * (2/100);
    let cot3 = valorDolar.value * (5/100);
    let cot4 = valorDolar.value * (10/100);

    resultado.textContent = 
    "   Aumento de 1%= " + cot1 +
    "   Aumento de 2%=" + cot2 +
    "   Aumento de 5%=" + cot3 +
    "   Aumento de 10%=" + cot4;
    }

btCalcular.onclick = function(){
    calcular();
}