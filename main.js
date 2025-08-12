'use strict'
function criarImagem (imagem) {
    const galeria = document.getElementById('galeria')

    //Cria um contêiner para a imagem e a legenda
    const container = document.createElement('div');
    container.classList.add('galeria__item');

    //Cria a tag da imagem
    const img = document.createElement('img');
    img.src = imagem.url

    //Cria a tag da legenda
    const legenda = document.createElement('p');
    legenda.textContent = imagem.nome;
    legenda.classList.add('Legenda');
    
    //Adiciona a imagem e a legenda ao contêiner
    container.appendChild(img);
    container.appendChild(legenda);

    //Adiciona o contêiner completo a galeria
    galeria.appendChild(container);

}

function carregarimagens (){
    const imagens = [
        {
            nome: 'Lua',
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
            nome: 'Mulher indígena',
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
            nome: 'Estátua',
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