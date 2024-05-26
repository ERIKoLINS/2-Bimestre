let numero1Input = document.querySelector("#numero1");
let numero2Input = document.querySelector("#numero2");
let btComparar = document.querySelector("#btComparar");
let resultadoDiv = document.querySelector("#resultado");

function compararNumeros() {
    // Obter os valores dos números
    let numero1 = Number(numero1Input.value);
    let numero2 = Number(numero2Input.value);
    
    // Verificar a relação entre os números
    let mensagem;
    if (numero1 > numero2) {
        mensagem = "O primeiro número é maior que o segundo.";
    } else if (numero1 < numero2) {
        mensagem = "O primeiro número é menor que o segundo.";
    } else {
        mensagem = "Os dois números são iguais.";
    }

    // Exibir o resultado
    resultadoDiv.innerHTML = `<h2>Resultado: ${mensagem}</h2>`;
}

btComparar.addEventListener("click", compararNumeros);