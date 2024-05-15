let numero = document.querySelector("#numero");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function verificarImpar() {
    let valor = parseInt(numero.value);

    if (valor % 2 !== 0) {
        resultado.textContent = valor + " é ímpar.";
    } else {
        resultado.textContent = valor + " não é ímpar.";
    }
}

btVerificar.onclick = verificarImpar;