let valorTotalInput = document.querySelector("#valorTotal");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularDivisao() {
    let valorTotal = parseFloat(valorTotalInput.value);

    if (isNaN(valorTotal) || valorTotal <= 0) {
        return;
    }

    // Calcular quanto cada amigo deve pagar
    let valorPorPessoa = Math.floor(valorTotal / 3); // Carlos e André pagam apenas o valor inteiro
    let valorFelipe = valorTotal - 2 * valorPorPessoa; // Felipe paga o total menos a soma dos pagamentos de Carlos e André

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <p>Carlos deve pagar R$ ${valorPorPessoa.toFixed(2)}</p>
        <p>André deve pagar R$ ${valorPorPessoa.toFixed(2)}</p>
        <p>Felipe deve pagar R$ ${valorFelipe.toFixed(2)}</p>
    `;
}

btCalcular.addEventListener("click", calcularDivisao);