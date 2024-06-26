document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');

    const noMessages = [
        "No",
        "No, por favor",
        "Lo siento",
        "Tal vez...",
        "Perdóname",
        "Está bien...",
        "En serio?",
        "Por favor, reconsidera",
        "Dame una oportunidad",
        "No seas así",
        "Piensa otra vez",
        "No me hagas esto",
        "Quizás otro día",
        "Vamos, di que sí",
        "Sé amable",
        "No te cuesta nada",
        "Soy tu amigo",
        "Solo una vez más",
        "Por favor",
        "No me digas que no"
    ];
    let noIndex = 0;
    let yesSize = 1;  // Inicializamos el tamaño del botón Sí
    
    yesButton.addEventListener('click', () => {
        message.classList.remove('hidden');
    });

    noButton.addEventListener('click', () => {
        yesSize += 1; // Incrementa el tamaño del botón Sí cada vez
        yesButton.style.fontSize = `${16 + yesSize * 2}px`; // Ajusta el tamaño del botón Sí
        noButton.classList.add('small');
        noButton.textContent = noMessages[noIndex];
        noIndex = (noIndex + 1) % noMessages.length;
        moveButton(noButton);
    });

    function moveButton(button) {
        const container = button.parentElement;
        const maxX = container.clientWidth - button.clientWidth;
        const maxY = container.clientHeight - button.clientHeight;

        const randX = Math.floor(Math.random() * maxX);
        const randY = Math.floor(Math.random() * maxY);

        button.style.position = 'absolute';
        button.style.left = `${randX}px`;
        button.style.top = `${randY}px`;
    }
});