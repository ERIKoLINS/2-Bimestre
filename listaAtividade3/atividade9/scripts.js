let x1Input = document.querySelector("#x1");
let y1Input = document.querySelector("#y1");
let x2Input = document.querySelector("#x2");
let y2Input = document.querySelector("#y2");
let btCalcular = document.querySelector("#btCalcular");
let resultadoDiv = document.querySelector("#resultado");

function calcularDistancia() {
    let x1 = parseFloat(x1Input.value);
    let y1 = parseFloat(y1Input.value);
    let x2 = parseFloat(x2Input.value);
    let y2 = parseFloat(y2Input.value);
    
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return;
    }

    // Calcular a distância entre os pontos usando a fórmula da distância euclidiana
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    // Exibir o resultado
    resultadoDiv.innerHTML = `<p>A distância entre os pontos (${x1}, ${y1}) e (${x2}, ${y2}) é ${distancia.toFixed(2)} unidades.</p>`;
}

btCalcular.addEventListener("click", calcularDistancia);