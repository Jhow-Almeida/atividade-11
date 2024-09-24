console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Função para criar imagem de cubo
function criarImagemCubo(cor) {
    let imagemCubo = document.createElement('img');
    imagemCubo.src = `https://via.placeholder.com/100/${cor}/FFFFFF?text=+`; // Imagem com cor
    imagemCubo.alt = `Cubo ${cor}`;
    imagemCubo.style.display = 'inline-block';
    imagemCubo.style.margin = '10px';
    return imagemCubo;
}

// Cores dos cubos (código hexadecimal)
let cores = ['FF0000', '00FF00', '0000FF', 'FFFF00', '800080', 'FFA500'];

// Adicionando as imagens de cubos ao body
cores.forEach(cor => {
    let imagemCubo = criarImagemCubo(cor);
    elementoBody.appendChild(imagemCubo);
});
