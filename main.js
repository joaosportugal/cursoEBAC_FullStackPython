const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
})

var campoA = document.getElementById('campo_a');
var campoB = document.getElementById('campo_b');

function validaForm() {
    if (campoB.value > campoA.value) {
        const mensagem = document.getElementById('mensagem');
        mensagem.style.display = 'block';
        mensagem.innerHTML = 'Parabéns! Os campos foram preenchidos corretamente!'
    } else {
        const mensagem = document.getElementById('mensagem');
        mensagem.style.display = 'block';
        mensagem.innerHTML = 'Que pena! O segundo número deve ser maior do que o primeiro'
    }
}

const botaoFormulario = document.getElementById('formulario_botao');
botaoFormulario.addEventListener('click', function() {
    validaForm();
})

