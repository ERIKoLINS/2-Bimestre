let valorVendidoInput = document.querySelector("#valorVendido");
let metaInput = document.querySelector("#meta");
let metaMinimaInput = document.querySelector("#metaMinima");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularMeta() {
    // Obter os valores do formulário
    let valorVendido = Number(valorVendidoInput.value);
    let meta = Number(metaInput.value);
    let metaMinima = Number(metaMinimaInput.value);
    
    // Calcular os percentuais de atingimento
    let percentualMeta = (valorVendido / meta) * 100;
    let percentualMetaMinima = (valorVendido / metaMinima) * 100;
    
    // Determinar a situação da meta
    let situacao;
    if (valorVendido >= meta) {
        situacao = "Atingiu a meta!";
    } else if (valorVendido >= metaMinima) {
        situacao = "Atingiu a meta mínima.";
    } else {
        situacao = "Não atingiu nenhuma meta.";
    }

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>${situacao}</p>
        <p>Percentual de atingimento da meta: ${percentualMeta.toFixed(2)}%</p>
        <p>Percentual de atingimento da meta mínima: ${percentualMetaMinima.toFixed(2)}%</p>
    `;
}

btCalcular.addEventListener("click", calcularMeta);
