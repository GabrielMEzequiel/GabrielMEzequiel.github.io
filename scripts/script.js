const myEmoji = document.getElementById('myEmoji');

// Função para mostrar o avatar parado
function mostrarAvatarParado() {
    myEmoji.src = 'assets/myEmoji2.gif';
}

// Função para o avatar piscando os olhos
function piscarOlhos() {
    myEmoji.src = 'assets/myEmoji.gif';

    // Depois de piscar, volta para o avatar parado
    setTimeout(mostrarAvatarParado, 550);
}

// Função para o avatar piscando com sorriso
function piscarSorriso() {
    myEmoji.src = 'assets/myEmoji3.gif';

    // Depois de piscar com sorriso, volta para o avatar parado
    setTimeout(mostrarAvatarParado, 700);
}

// Piscar ambos os olhos a cada 3 segundos
setInterval(piscarOlhos, 3000);

// Piscar com sorriso a cada 1 minuto, sincronizado com as piscadas normais
setInterval(piscarSorriso, 60000);