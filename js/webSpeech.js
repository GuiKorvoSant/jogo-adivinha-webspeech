const elementoChuteHTML = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    let chute = (event.results[0][0].transcript); 
    chute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
    verificaChute();
}

recognition.addEventListener("end", () => recognition.start());
