let diaInput = document.querySelector("#dia");
let mesInput = document.querySelector("#mes");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularDiasPassados() {
    let dia = parseInt(diaInput.value);
    let mes = parseInt(mesInput.value);

    if (isNaN(dia) || dia < 1 || dia > 30 || isNaN(mes) || mes < 1 || mes > 12) {
        return;
    }

    // Calcular o total de dias desde o início do ano
    let diasPassados = (mes - 1) * 30 + dia;

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>Já se passaram ${diasPassados} dias desde o início do ano.</p>`;
}

btCalcular.addEventListener("click", calcularDiasPassados);