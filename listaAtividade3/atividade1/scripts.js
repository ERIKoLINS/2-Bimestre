let larguraInput = document.querySelector("#largura");
let comprimentoInput = document.querySelector("#comprimento");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularArea() {
    let largura = parseFloat(larguraInput.value);
    let comprimento = parseFloat(comprimentoInput.value);
    let area = largura * comprimento;

    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>A área do terreno é: ${area.toFixed(2)} metros quadrados</p>
    `;
}

btCalcular.addEventListener("click", calcularArea);
