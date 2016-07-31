var $ = require('jquery');
global.jQuery = $;
require('bootstrap-sass');

console.log('llego aqui');

var projecto = require('./projects');

console.log('y aqui no');

if (window.location.pathname == '/detalle.html'){
    projecto.loadDetalle();
}else if (window.location.pathname == '/' || window.location.pathname == '/index.html'){
    projecto.load();
}

require('./form');
require('./functionmg');
require('./favoritefunction');



