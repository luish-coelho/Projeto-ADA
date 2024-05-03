// Array que contém mensagens de apoio
const mensagens = [
    "Você não está sozinho. Estou aqui para você, não importa o que aconteça.",
    "Sua jornada é única e respeito seu tempo para se recuperar. Estou ao seu lado.",
    "Sua dor é real, e estou aqui para ouvir sem julgamentos sempre que precisar.",
    "Não há problema em não se sentir bem. Estou aqui para apoiar você em cada passo.",
    "Sua força para enfrentar cada dia é inspiradora. Estou orgulhosa de você."
];

// Função para exibir uma mensagem aleatória do array de mensagens
function exibirMensagem() {
    const indice = Math.floor(Math.random() * mensagens.length);
    const mensagem = mensagens[indice];
    const mensagemElement = document.getElementById('mensagem');

    // Define o fade-out antes de exibir a nova mensagem
    fadeOut(mensagemElement, 1000, function() {
        // Após o fade-out, define a nova mensagem e faz o fade-in
        mensagemElement.textContent = mensagem;
        fadeIn(mensagemElement, 500); // Tempo de fade-in: 0.5 segundos
    });
}

// Função para realizar o efeito de fade-in
function fadeIn(elemento, duracao) {
    var opacidade = 0;
    var incremento = 50 / duracao;

    var intervalo = setInterval(function() {
        if (opacidade >= 1) {
            clearInterval(intervalo);
        }
        elemento.style.opacity = opacidade;
        opacidade += incremento;
    }, 50);
}

// Função para realizar o efeito de fade-out
function fadeOut(elemento, duracao, callback) {
    var opacidade = 1;
    var incremento = 50 / duracao;

    var intervalo = setInterval(function() {
        if (opacidade <= 0) {
            clearInterval(intervalo);
            if (typeof callback === 'function') {
                callback();
            }
        }
        elemento.style.opacity = opacidade;
        opacidade -= incremento;
    }, 50);
}

// Evento que é acionado quando o DOM está completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    exibirMensagem();
    setInterval(exibirMensagem, 9000); // Altera a mensagem a cada 7 segundos
});



