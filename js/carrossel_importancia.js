let imagens = [
    '../img/imagem_carrossel.webp',
    '../img/imagem_carrossel2.jpg',
    '../img/imagem_carrossel3.png'
];

let IndiceAtualListaImagens = 0;

function exibirImagem() {
    let imagemCarrossel = document.getElementById('img-carrossel');
    imagemCarrossel.src = imagens[IndiceAtualListaImagens];
}


exibirImagem();


setInterval(function() {
    IndiceAtualListaImagens++;

    
    if (IndiceAtualListaImagens >= imagens.length) {
        IndiceAtualListaImagens = 0;
    }

    exibirImagem();
}, 5000);
