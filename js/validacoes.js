function verificaChute(chute) {
    const numero = +chute //aqui estamos arredondando o chute falado.

    if(verificaSeFoiFaladoUmNumero(numero)) {
        elementoChuteHTML.innerHTML = `<div>Valor inválido</div>`;
    }

    if(chuteDentroDoLimite(numero)) {
        elementoChuteHTML.innerHTML += `
        <div>Valor inválido: Seu palpite deve ser entre ${menorValor} e ${maiorValor}</div>
        `;
    } else if (numero > numAleatorio) {
        elementoChuteHTML.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>
        `;
    } else {
        elementoChuteHTML.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
        `;
    }

    if(numero == numAleatorio) {
        document.body.innerHTML = `
        <h2>Parábens, Você acertou!!</h2>
        <h3>O número secreto era ${numAleatorio}
        <button id='jogar-novamente' class='btn-jogar-novamente'></button>
        `
    }
}

function verificaSeFoiFaladoUmNumero(numero) {
    return Number.isNaN(numero);
}

function chuteDentroDoLimite(numero) {
    return numero > maiorValor || numero < menorValor;
}


document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente') {
        window.location.reload();
    };
});