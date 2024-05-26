let numeroInput = document.querySelector("#numero");
let btVerificar = document.querySelector("#btVerificar");
let resultadoDiv = document.querySelector("#resultado");

function verificarParOuImpar() {
    // Obter o valor do número
    let numero = Number(numeroInput.value);
    
    // Verificar se o número é par ou ímpar
    let mensagem;
    if (numero % 2 === 0) {
        mensagem = "O número é Par.";
    } else {
        mensagem = "O número é Ímpar.";
    }

    // Exibir o resultado
    resultadoDiv.innerHTML = `<h2>Resultado: ${mensagem}</h2>`;
}

btVerificar.addEventListener("click", verificarParOuImpar);