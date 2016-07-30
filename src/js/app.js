var $ = require('jquery');
global.jQuery = $;
require('bootstrap-sass');




var projecto = require('./projects');

if (window.location.pathname == '/detalle.html'){
    projecto.loadDetalle();
}else if (window.location.pathname == '/' || window.location.pathname == '/index.html'){
    projecto.load();
}

require('./form');
require('./functionmg');
require('./favoritefunction');



