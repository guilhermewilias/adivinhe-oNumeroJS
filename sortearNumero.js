const menorValor = 1
const maiorvalor = 100
const numeroSecreto = gerarNumeroAleatorio ()

function gerarNumeroAleatorio(){
    return parseInt (Math.random () * maiorvalor +  1)  //Define que o valor é entre UM até CEM. //E é uma API que sorteia o numero
}

console.log("Número secreto é : " ,numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorvalor
