let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular(){
    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);

    //calcular a soma
    let soma = vlr1 + vlr2;

    //calcular a subtração
    let subtração = vlr1 - vlr2;

    //calcular a multiplicação
    let multiplicação = vlr1 * vlr2;
    
    //calcular a divisão
    let divisão = vlr1 / vlr2

    resultado.textContent = `
    Soma: ${soma}
    Subtração: ${subtração}
    Multiplicação: ${multiplicação}
    Divisão: ${divisão} `;
}

btCalcular.onclick = function(){
    calcular()
}