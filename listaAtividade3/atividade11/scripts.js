let salarioInput = document.querySelector("#salario");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularSalario() {
    let salario = parseFloat(salarioInput.value);

    if (isNaN(salario) || salario < 0) {
        return;
    }

    // Calcular o aumento de 15%
    let salarioComAumento = salario * 1.15;

    // Calcular o desconto de 8% de impostos
    let salarioFinal = salarioComAumento * 0.92;

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <p>Salário inicial: R$ ${salario.toFixed(2)}</p>
        <p>Salário com aumento (15%): R$ ${salarioComAumento.toFixed(2)}</p>
        <p>Salário final (desconto de 8% de impostos): R$ ${salarioFinal.toFixed(2)}</p>
    `;
}


btCalcular.addEventListener("click", calcularSalario);