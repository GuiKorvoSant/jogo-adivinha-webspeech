const menorValor = 1;
const maiorValor = 1000;
const numAleatorio = sorteadorDeNumero();

function sorteadorDeNumero() {

    return parseInt(Math.random() * maiorValor + 1);
}

console.log(`O número secreto é: ${numAleatorio}`);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
