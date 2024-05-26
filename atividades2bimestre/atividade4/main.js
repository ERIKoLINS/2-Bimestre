let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let btCalcular = document.querySelector("#btCalcular");
let refrigerantes = document.querySelector("#refrigerantes");
let resultadoDiv = document.querySelector("#resultado");

// Adiciona o evento de clique no botão calcular
btCalcular.addEventListener("click", calcularPedido);

function calcularPedido() {
    // Obter os valores dos sabores e quantidade de refrigerantes
    let sabor1Value = sabor1.value;
    let sabor2Value = sabor2.value;
    let sabor3Value = sabor3.value;
    let sabor4Value = sabor4.value;
    let refrigerantesValue = Number(refrigerantes.value);
    
    // Calcular o valor total
    const precoPizza = 12.00;
    const precoRefrigerante = 7.00;
    const totalPizzas = 4 * precoPizza;
    const totalRefrigerantes = refrigerantesValue * precoRefrigerante;
    const total = totalPizzas + totalRefrigerantes;

    // Exibir o resultado
    resultadoDiv.innerHTML = `
        <h2>Resumo do Pedido</h2>
        <p>Sabor 1: ${sabor1Value}</p>
        <p>Sabor 2: ${sabor2Value}</p>
        <p>Sabor 3: ${sabor3Value}</p>
        <p>Sabor 4: ${sabor4Value}</p>
        <p>Quantidade de Refrigerantes: ${refrigerantesValue}</p>
        <h3>Valor Total a Pagar: R$ ${total.toFixed(2)}</h3>
    `;
}