let numeroInput = document.querySelector("#numero");
let btSeparar = document.querySelector("#btSeparar");
let resultadoDiv = document.querySelector("#resultado");

function separarNumero() {
    let numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 0 || numero > 999) {
        return;
    }

    // Extrair as centenas, dezenas e unidades do número
    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <p>CENTENA = ${centena}</p>
        <p>DEZENA = ${dezena}</p>
        <p>UNIDADE = ${unidade}</p>
    `;
}

btSeparar.addEventListener("click", separarNumero);
