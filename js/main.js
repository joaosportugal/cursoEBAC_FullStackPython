$(document).ready(function() {

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00.000-00', {
        placeholder: '__.___-__'
    });
})