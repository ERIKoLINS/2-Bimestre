let valorPago = document.querySelector("#valorPago");
let valorProd = document.querySelector("#valorProd");
let h3Troco = document.querySelector("#h3Troco");
let btSomar = document.querySelector("#btSomar");

function calcularTroco(){
    let vlr1 = Number(valorPago.value);
    let vlr2 = Number(valorProd.value);
    
    if(vlr1 < vlr2){
        h3Troco.textContent = "valor insuficiente";
    } else if(vlr1 === vlr2){
        h3Troco.textContent = "não precisa de troco";  
    } else{
         //calcular o troco
     let troco = vlr1 - vlr2;
        h3Troco.textContent = "troco" + troco;
    }
}

btSomar.onclick = function(){
    calcularTroco()
}