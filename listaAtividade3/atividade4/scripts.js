let nomeInput = document.querySelector("#nome");
let idadeInput = document.querySelector("#idade");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularDiasDeVida() {
    let nome = nomeInput.value.trim();
    let idade = parseInt(idadeInput.value);

    // Verifica se os valores são válidos
    if (nome === "" || isNaN(idade) || idade < 0) {
        return;
    }

    // Calcular o total de dias de vida
    const diasPorAno = 365;
    let totalDiasDeVida = idade * diasPorAno;

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>${nome.toUpperCase()}, VOCÊ JÁ VIVEU ${totalDiasDeVida} DIAS</p>`;
}

btCalcular.addEventListener("click", calcularDiasDeVida);
