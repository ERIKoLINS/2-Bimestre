let raioInput = document.querySelector("#raio");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularArea() {
    let raio = parseFloat(raioInput.value);
    if (isNaN(raio) || raio <= 0) {
        return;
    }

    // Calcular a área da pizza
    let area = Math.PI * Math.pow(raio, 2);

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>A área da pizza é ${area.toFixed(2)} cm².</p>`;
}

btCalcular.addEventListener("click", calcularArea);