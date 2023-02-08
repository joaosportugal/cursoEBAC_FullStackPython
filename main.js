$(document).ready(function(){
    $('#botao-cadastrar').click(function(){
        const newTask = $('#input').val();
        const toDoList = $('.toDoList');
        const newItem = $(`<li class="task">${newTask}</li>`);
        newItem.appendTo(toDoList);

        $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
        })

        $('#input').val('');
    })
})