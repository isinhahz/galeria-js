'use strict'
function criarImagem (imagem) {
    const galeria = document.getElementById('galeria')
    const img = document.createElement ('img')
    img.src = imagem.url
    galeria.appendChild(img)

}

function carregarimagens (){
    const imagens = [
        {
            nome: 'lua',
            url: './img/arte-1.jpg',
        },

        {
            nome: 'Casas',
            url: './img/arte-2.webp'
        },

        {
            nome: 'Palmeiras',
            url: './img/arte-3.jpg'
        },

        {
            nome: 'Noite estrelada',
            url: './img/arte-4.jpg'
        },

        {
            nome: 'Mulher indigena',
            url: './img/arte-5.webp'
        },

        {
            nome: 'Brasil',
            url: './img/arte-6.jpeg'
        },

        {
            nome: 'Arte Kobra',
            url: './img/arte-7.webp'
        },

        {
            nome: 'Estatua',
            url: './img/arte-8.webp'
        },

        {
            nome: 'Monalisa',
            url: './img/arte-9.webp'
        },

        {
            nome: 'Tucano',
            url: './img/arte-10.webp'
        }
    ]

    imagens.forEach(criarImagem)
}

carregarimagens()