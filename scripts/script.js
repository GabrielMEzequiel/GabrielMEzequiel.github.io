const myEmoji = document.getElementById('myEmoji');

function mostrarAvatarParado() {
    myEmoji.src = 'assets/myEmoji2.gif';
}

function piscarOlhos() {
    myEmoji.src = 'assets/myEmoji.gif';
    setTimeout(mostrarAvatarParado, 550);
}

function piscarSorriso() {
    myEmoji.src = 'assets/myEmoji3.gif';
    setTimeout(mostrarAvatarParado, 700);
}
setInterval(piscarOlhos, 3000);
setInterval(piscarSorriso, 60000);