var $ = require('jquery');


$(".main").on("click", ".btn", function(){
    var self = this;
    var proyectoId = $(this).parent().data('id');
    var proyectoTitle = $(this).parent().data('title');


    if ($(this).html() === 'Me gusta'){
        if (typeof(Storage) !== "undefined") {

            localStorage.setItem(proyectoId, proyectoTitle);
            $(self).html('No me gusta');
            $(self).attr('class', 'btn btn-danger');

        }
    }else if ($(this).html() === 'No me gusta'){
        localStorage.removeItem(proyectoId);
        $(self).html('Me gusta');
        $(self).attr('class', 'btn btn-primary');
    }

});
