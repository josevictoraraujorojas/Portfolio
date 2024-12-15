// Obtém o botão do hambúrguer pelo seu ID
const hamburguer = document.getElementById('hamburguer');

// Define uma variável booleana para controlar o estado do menu (aberto ou fechado)
let boolean = false;

// Adiciona um evento de clique ao botão hambúrguer
hamburguer.addEventListener('click', function () {
    // Obtém o menu hambúrguer pelo seu ID
    const menu = document.getElementById('menu-hamburguer');

    // Verifica se o menu está fechado (boolean == false)
    if (boolean == false) {
        // Torna o menu visível
        menu.style.display = 'flex';

        // Configura o primeiro elemento filho do menu para ser exibido como flex
        menu.children[0].style.display = 'flex';

        // Altera a direção do layout flexível para coluna (vertical)
        menu.children[0].style.flexDirection = 'column';

        // Altera o estado da variável booleana para verdadeiro (menu aberto)
        boolean = true;

        // Remove as classes que representam o ícone de "hambúrguer" do botão
        hamburguer.children[0].classList.remove('fa-solid');
        hamburguer.children[0].classList.remove('fa-bars');

        // Adiciona as classes que representam o ícone de "fechar" ao botão
        hamburguer.children[0].classList.add('fa-solid');
        hamburguer.children[0].classList.add('fa-x');
    } else {
        // Torna o menu invisível
        menu.style.display = 'none';

        // Altera o estado da variável booleana para falso (menu fechado)
        boolean = false;

        // Remove as classes que representam o ícone de "fechar" do botão
        hamburguer.children[0].classList.remove('fa-solid');
        hamburguer.children[0].classList.remove('fa-x');

        // Adiciona as classes que representam o ícone de "hambúrguer" ao botão
        hamburguer.children[0].classList.add('fa-solid');
        hamburguer.children[0].classList.add('fa-bars');
    }

    // Exibe uma mensagem no console para testes e depuração
    console.log('teste');
});
