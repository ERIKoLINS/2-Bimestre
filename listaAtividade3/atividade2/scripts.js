let numCavalosInput = document.querySelector("#numCavalos");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularFerraduras() {
    let numCavalos = parseInt(numCavalosInput.value);

    if (isNaN(numCavalos) || numCavalos <= 0) {
        return;
    }
    let numFerraduras = numCavalos * 4;

    resultadoDiv.innerHTML = `
        <h2>Resultado</h2> Será necessárias ${numFerraduras} ferraduras.</p>
    `;
}

btCalcular.addEventListener("click", calcularFerraduras);