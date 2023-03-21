const meuBotao = document.getElementById('meuBotao');
const corDeFundo1 = '#363636';
const corDeFundo2 = '#f8f8f8';
let corAtual = '#363636';
meuBotao.addEventListener('click', function() {
    
    if (corAtual === '#363636') {
        document.body.style.backgroundColor = corDeFundo2;
        corAtual = corDeFundo2;
    } else {
        document.body.style.backgroundColor = corDeFundo1;
        corAtual = corDeFundo1;
    }
})



