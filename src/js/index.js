// pegar botão referencia no html
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//adicionar evento no click do botão
botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

//função que será executada
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
