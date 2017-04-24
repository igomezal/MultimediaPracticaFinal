$(document).ready(function() {
    var selected = false;
    
    $('ul > li > img').click(function() {
        $('ul > li > img').removeClass('selected');
        selected = true;
        $(this).addClass('selected');
    });
    
    $('ul > li > img').keydown(function(e){
        if(e.which == 13){ // enter
            $('ul > li > img').removeClass('selected');
            selected = true;
            $(this).addClass('selected');
        }
    });
    
    $('#submit').click(function(event) {
        event.preventDefault();
        if(selected && $('#email').val()) {
            $('#form').append('<div id="post" class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span>La postal ha sido enviada con éxito</span></div>');
            window.setTimeout(function() { $("#post").alert('close'); }, 2000);
        }
        else {
            $('#form').append('<div id="post" class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span>Faltan campos por rellenar</span></div>');
            window.setTimeout(function() { $("#post").alert('close'); }, 2000);
        }
    })
});