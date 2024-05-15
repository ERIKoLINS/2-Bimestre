let saldo = document.querySelector("#saldo");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function ajustarSaldo(){
    let vlr1 = Number(saldo.value);

    //calcular  saldo
    let saldoAjustado = vlr1 * 1.01

    resultado.textContent =
        " saldoAjustado " + saldoAjustado.toFixed(2);
}

btCalcular.onclick = function(){
    ajustarSaldo()
}