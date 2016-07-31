var $ = require('jquery');
var ajax = require("./javas2");
var favorite2 = require('./functionmg');
var favorite = require('./favoritefunction');
module.exports = {

    load: function(){
        ajax.funcionatrix(function(response) {
            $('.main').html('');
            for (var i in response) {
                var project = response[i];
                console.log('llego aqui');
                var imagenvideo;
                var video = project.vid || "";
                var imagen = project.img || "";
                if (imagen == "" & video ==""){
                    imagen = "images/placeholder.jpg";
                    imagenvideo = '<a href="#" class="thumb pull-left"><img  class="img-thumbnail" src="' + imagen + '"></a>';
                }
                else if(imagen == "" & video !== ""){
                    imagenvideo = '<a href="#" class="thumb pull-left"><video class="video anchomax" src="' + video + '"></video></a>';
                }
                else if (imagen !== "" & video == "" ) {
                    imagen = project.img;
                    imagenvideo = '<a href="#" class="thumb pull-left anchomax"><img  class="img-thumbnail" src="' + imagen + '"></a>';
                }
                var autorimg = project.autorimg || "";
                if (autorimg == ""){
                    autorimg = 'images/ProfilePlaceholderSuit.png';
                }

                var id = project.id || "";
                var titulo = project.titulazo || "";
                var texto = project.texto || "";
                var autor = project.autor || "";
                var fecha = project.date || "";
                var comentario = JSON.parse(project.comments);
                var largo = comentario.length;
                var like;

                if (favorite.isFavorite(id) === true) {
                    like = '<button type="button" id="like" class="btn btn-danger">No me gusta</button>'
                } else {
                    like = '<button type="button" id="like" class="btn btn-primary">Me gusta</button>'
                }






                var html = '<article class="post clearfix id="id" data-id="' + id + '"  data-title="' + titulo + '">';
                html += imagenvideo;
                html += '<h2 class="post-title"><a href="detalle.html">' + titulo + '</a></h2>';
                html += '<p><span class="post-fecha">' + fecha + '</span> por <span class="post-autor"><a>' + autor + '</a></span></p>';
                html += '<img class="author-img img-thumbnail" src="' + autorimg + '">';
				html += '<p class="post-contenido text-justify">' + texto + '</p>';
                html += like;
                html += '<a href="" class="btn btn-success marginclass">Comentarios<span class="badge">' + largo + '</span></a>';
                html += '</div>';
                html += '</article>';
                $('.main').append(html);
                
            }
        
        }, function(error){
        	console.log('Error', error);
        });
    },
    
    
    loadDetalle: function () {
        ajax.detallearticulo(function(response) {
            $('.main').html('');
            var project = response;
            var imagenvideo;
            var imagen = project.img || "";
            if (imagen == ""){
                imagen = "images/placeholder.jpg";
                imagenvideo = '<a href="#" class="thumb pull-left"><img  class="img-thumbnail" src="' +imagen + '"></a>';
            }
            else if(imagen !== ""){
                imagen = project.img;
                imagenvideo = '<a href="#" class="thumb pull-left"><img  class="img-thumbnail" src="'+ imagen + '"></a>'
            }
            
            var autorimg = project.autorimg || "";
            if (autorimg == ""){
                autorimg = 'images/ProfilePlaceholderSuit.png';
            }
            
            var id = project.id || "";
            var titulo = project.titulazo || "";
            var texto = project.texto || "";
            var autor = project.autor || "";
            var fecha = project.date || "";
            var articulo = project.articulo || "";
            var comentario = JSON.parse(project.comments);
            var largo = comentario.length;
            var like;

            if (favorite.isFavorite(id) === true) {
                like = '<button type="button" id="like" class="btn btn-danger">No me gusta</button>'
            } else {
                like = '<button type="button" id="like" class="btn btn-primary">Me gusta</button>'
            }


            var html = '<article class="post clearfix">';
            html += imagenvideo;
            html += '<h2 class="post-title"><a>' + titulo + '</a></h2>';
            html += '<p><span class="post-fecha">' + fecha + '</span> por <span class="post-autor"><a>' + autor + '</a></span></p>';
            html += '<img class="author-img img-thumbnail" src="' + autorimg + '">';
            html += '<p class="post-contenido text-justify marginpequeño">' + texto + '</p>';
            html += '<div class="post-contenido margingrande">' + articulo + '</div>';
            html += like;
            html += '</div>';
            html += '</article>';
            $('.main').append(html);

            for (i in comentario){
                var comment = comentario[i];
                var nombre = comment.name || "";
                var apellidocomentario = comment.lastname || "";
                var textocomentario = comment.text || "";

                var html2= '<h5>' + nombre + '' +  apellidocomentario + '</h5>';
                html2 += '<p>' + textocomentario +  '</p>';
                html2 += '<br><br><br>';


                $('#comentarios').append(html2);
            }

        }, function(error){
            console.log('Error', error);
        });

    }
}
  
