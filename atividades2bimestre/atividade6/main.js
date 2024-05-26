let notaInput = document.querySelector("#nota");
let btVerificar = document.querySelector("#btVerificar");
let resultadoDiv = document.querySelector("#resultado");

function verificarNota() {
    // Obter o valor da nota
    let nota = Number(notaInput.value);
    
    // Verificar a situação do aluno
    let mensagem;
    if (nota > 5) {
        mensagem = "Aprovado";
    } else if (nota >= 4 && nota <= 6) {
        mensagem = "Precisa fazer prova substitutiva";
    } else {
        mensagem = "Reprovado";
    }

    // Exibir o resultado
    resultadoDiv.innerHTML = `<h2>Situação: ${mensagem}</h2>`;
}

btVerificar.addEventListener("click", verificarNota);