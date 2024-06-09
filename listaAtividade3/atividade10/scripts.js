let diasInput = document.querySelector("#dias");
let btConverter = document.querySelector("#btConverter");
let resultadoDiv = document.querySelector("#resultado");

function converterTempo() {
    let dias = parseInt(diasInput.value);

    if (isNaN(dias) || dias < 0) {
    }

    // Converter dias em anos, meses e dias
    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = dias % 30;

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>O tempo de trabalho sem acidentes é de ${anos} anos, ${meses} meses e ${diasRestantes} dias.</p>`;
}

btConverter.addEventListener("click", converterTempo);