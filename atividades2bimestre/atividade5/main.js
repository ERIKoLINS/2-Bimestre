let nome1Input = document.querySelector("#nome1");
let anoNascimento1Input = document.querySelector("#anoNascimento1");
let nome2Input = document.querySelector("#nome2");
let anoNascimento2Input = document.querySelector("#anoNascimento2");
let nome3Input = document.querySelector("#nome3");
let anoNascimento3Input = document.querySelector("#anoNascimento3");
let btVerificar = document.querySelector("#btVerificar");
let resultadoDiv = document.querySelector("#resultado");

function verificarIdade() {
    // Obter os valores de nome e ano de nascimento das três pessoas
    let nome1 = nome1Input.value;
    let anoNascimento1 = parseInt(anoNascimento1Input.value);
    let nome2 = nome2Input.value;
    let anoNascimento2 = parseInt(anoNascimento2Input.value);
    let nome3 = nome3Input.value;
    let anoNascimento3 = parseInt(anoNascimento3Input.value);

    // Calcular as idades das três pessoas
    let anoAtual = new Date().getFullYear();
    let idade1 = anoAtual - anoNascimento1;
    let idade2 = anoAtual - anoNascimento2;
    let idade3 = anoAtual - anoNascimento3;

    // Determinar a pessoa mais velha, a segunda mais velha e a terceira mais velha
    let maisVelha, segundaMaisVelha, terceiraMaisVelha;
    if (idade1 > idade2 && idade1 > idade3) {
        maisVelha = { nome: nome1, idade: idade1 };
        if (idade2 > idade3) {
            segundaMaisVelha = { nome: nome2, idade: idade2 };
            terceiraMaisVelha = { nome: nome3, idade: idade3 };
        } else {
            segundaMaisVelha = { nome: nome3, idade: idade3 };
            terceiraMaisVelha = { nome: nome2, idade: idade2 };
        }
    } else if (idade2 > idade1 && idade2 > idade3) {
        maisVelha = { nome: nome2, idade: idade2 };
        if (idade1 > idade3) {
            segundaMaisVelha = { nome: nome1, idade: idade1 };
            terceiraMaisVelha = { nome: nome3, idade: idade3 };
        } else {
            segundaMaisVelha = { nome: nome3, idade: idade3 };
            terceiraMaisVelha = { nome: nome1, idade: idade1 };
        }
    } else {
        maisVelha = { nome: nome3, idade: idade3 };
        if (idade1 > idade2) {
            segundaMaisVelha = { nome: nome1, idade: idade1 };
            terceiraMaisVelha = { nome: nome2, idade: idade2 };
        } else {
            segundaMaisVelha = { nome: nome2, idade: idade2 };
            terceiraMaisVelha = { nome: nome1, idade: idade1 };
        }
    }

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Pessoa mais velha: ${maisVelha.nome} - ${maisVelha.idade} anos</p>
        <p>Segunda pessoa mais velha: ${segundaMaisVelha.nome} - ${segundaMaisVelha.idade} anos</p>
        <p>Terceira pessoa mais velha: ${terceiraMaisVelha.nome} - ${terceiraMaisVelha.idade} anos</p>
    `;
}

btVerificar.addEventListener("click", verificarIdade);