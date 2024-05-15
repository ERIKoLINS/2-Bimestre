let ipValor1 = document.querySelector("#Valor1");
let ipValor2 = document.querySelector("#Valor2");
let ipValor3 = document.querySelector("#Valor3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular() {
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
    let vlr3 = Number(ipValor3.value);
    
    // Calcular a média aritmética
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    // Calcular a média ponderada
    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos;
    
    // Soma das Médias
    let somaMedias = mediaAritmetica + mediaPonderada;

    // Média das médias
    let mediaMedias = somaMedias / 2;

    h3Resultado.textContent =
        " Média Aritmética: " + mediaAritmetica + 
        " Média Ponderada: " + mediaPonderada + 
        " Soma das Médias: " + somaMedias + 
        " Média das Médias: " + mediaMedias;
}

btCalcular.onclick = function() {
    calcular();
};
