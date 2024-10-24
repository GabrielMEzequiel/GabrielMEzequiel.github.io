const myEmoji = document.getElementById('myEmoji');
let isFirstEmoji = true;

function toggleEmoji() {
    if (isFirstEmoji) {
        myEmoji.src = 'assets/myEmoji2.gif';
        isFirstEmoji = false;

        // Espera até que o 'myEmoji2.gif' termine a animação e volta para o primeiro
        setTimeout(() => {
            myEmoji.src = 'assets/myEmoji.gif';
            isFirstEmoji = true;
        }, 2000); // Ajuste o tempo (2000ms = 2 segundos) para o tempo da animação do segundo emoji

    }
}

// Alterna a cada 2 minutos (120000ms)
setInterval(toggleEmoji, 120000);
