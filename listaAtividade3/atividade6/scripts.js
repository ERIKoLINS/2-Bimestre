let pesoPratoInput = document.querySelector("#pesoPrato");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularValor() {
    let pesoPrato = parseFloat(pesoPratoInput.value);

    if (isNaN(pesoPrato) || pesoPrato <= 0) {
        return;
    }

    // Preço por quilo
    const precoPorQuilo = 12.00;

    // Calcular o valor a pagar
    let valorAPagar = pesoPrato * precoPorQuilo;

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>O valor a pagar é R$ ${valorAPagar.toFixed(2)}</p>`;
}

btCalcular.addEventListener("click", calcularValor);