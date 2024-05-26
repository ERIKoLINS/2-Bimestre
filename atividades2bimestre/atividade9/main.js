let numAlunosInput = document.querySelector("#numAlunos");
let numTurmasInput = document.querySelector("#numTurmas");
let btDividir = document.querySelector("#btDividir");
let resultadoDiv = document.querySelector("#resultado");

function dividirTurmas() {
    // Obter os valores do número de alunos e de turmas
    let numAlunos = Number(numAlunosInput.value);
    let numTurmas = Number(numTurmasInput.value);
    
    // Calcular a quantidade de pessoas por turma e quantas ficarão sem turma
    let alunosPorTurma = Math.floor(numAlunos / numTurmas);
    let alunosSemTurma = numAlunos % numTurmas;

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <h2>Resultado da Divisão</h2>
        <p>Quantidade de pessoas por turma: ${alunosPorTurma}</p>
        <p>Quantidade de pessoas sem turma: ${alunosSemTurma}</p>
    `;
}

btDividir.addEventListener("click", dividirTurmas);