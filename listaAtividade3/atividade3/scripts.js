let numPaesInput = document.querySelector("#numPaes");
let numBroasInput = document.querySelector("#numBroas");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularTotal() {
    let numPaes = parseInt(numPaesInput.value);
    let numBroas = parseInt(numBroasInput.value);

    if (isNaN(numPaes) || numPaes < 0 || isNaN(numBroas) || numBroas < 0) {
        return;
    }

    // Preço dos itens
    const precoPao = 0.12;
    const precoBroa = 1.50;

    // Calcular o total arrecadado
    let totalPaes = numPaes * precoPao;
    let totalBroas = numBroas * precoBroa;
    let totalArrecadado = totalPaes + totalBroas;

    // Calcular 10% para poupança
    let poupanca = totalArrecadado * 0.10;

    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Total arrecadado com pães: R$ ${totalPaes.toFixed(2)}</p>
        <p>Total arrecadado com broas: R$ ${totalBroas.toFixed(2)}</p>
        <p>Total arrecadado: R$ ${totalArrecadado.toFixed(2)}</p>
        <p>Valor a ser guardado na poupança (10%): R$ ${poupanca.toFixed(2)}</p>
    `;
}

btCalcular.addEventListener("click", calcularTotal);