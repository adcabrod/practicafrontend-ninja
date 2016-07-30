var $ = require('jquery');


module.exports = {
    escapeHTML: function (str) {
        return $('<div>').text(str).html();
    },
    isFavorite: function (proyectoId) {


        var item = localStorage.getItem(proyectoId);


        if (item === null) {
            return false
        } else {
            return true
        }
    },
};