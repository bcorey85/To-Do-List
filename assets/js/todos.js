$('ul').on('click', 'li', function(){
    $(this).toggleClass('line-through')
})

$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(250, function(){
        $(this).remove()
    })
    e.stopPropagation()
})

$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        let todoText = $(this).val()
        $(this).val("")
        $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText} </li>`)
    }
})

$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle()
})