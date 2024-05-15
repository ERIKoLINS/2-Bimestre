let codigo = document.querySelector("#codigo");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function retornarCodigo(){

    if (codigo.value === '001') {
        resultado.textContent = 'parafuso';
    } else if(codigo.value === '002'){
       resultado.textContent = 'porca'; 
    }
      else if (codigo.value === '003'){
        resultado.textContent = 'prego';
    } else{
        resultado.textContent = 'diversos';
    }
}

btVerificar.onclick = function(){
    retornarCodigo();
}