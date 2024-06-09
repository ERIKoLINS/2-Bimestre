let quantidadePequenaInput = document.querySelector("#quantidadePequena");
let quantidadeMediaInput = document.querySelector("#quantidadeMedia");
let quantidadeGrandeInput = document.querySelector("#quantidadeGrande");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularValorTotal() {
    let quantidadePequena = parseInt(quantidadePequenaInput.value);
    let quantidadeMedia = parseInt(quantidadeMediaInput.value);
    let quantidadeGrande = parseInt(quantidadeGrandeInput.value);

    if (isNaN(quantidadePequena) || quantidadePequena < 0 ||
        isNaN(quantidadeMedia) || quantidadeMedia < 0 ||
        isNaN(quantidadeGrande) || quantidadeGrande < 0) {
    }

    // Preços das camisetas
    const precoPequena = 10;
    const precoMedia = 12;
    const precoGrande = 15;

    // Calcular o valor total arrecadado
    let valorTotal = (quantidadePequena * precoPequena) + (quantidadeMedia * precoMedia) + (quantidadeGrande * precoGrande);

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>O valor total arrecadado é R$ ${valorTotal.toFixed(2)}</p>`;
}

btCalcular.addEventListener("click", calcularValorTotal);