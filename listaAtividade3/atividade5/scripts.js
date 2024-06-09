let precoLitroInput = document.querySelector("#precoLitro");
let valorPagamentoInput = document.querySelector("#valorPagamento");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularLitros() {
    let precoLitro = parseFloat(precoLitroInput.value);
    let valorPagamento = parseFloat(valorPagamentoInput.value);

    if (isNaN(precoLitro) || precoLitro <= 0 || isNaN(valorPagamento) || valorPagamento <= 0) {
        return;
    }

    // Calcular a quantidade de litros de gasolina
    let litros = valorPagamento / precoLitro;

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>Você conseguiu colocar ${litros.toFixed(2)} litros de gasolina no tanque.</p>`;
}

btCalcular.addEventListener("click", calcularLitros);
