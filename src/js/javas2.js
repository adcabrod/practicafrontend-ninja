var $ = require('jquery');

module.exports = {

    funcionatrix: function (successCallback, errorCallback) {
        $.ajax({
            url: "/api/proyecto/",
            method: "get",
            success: successCallback,
            error: errorCallback
        });
    },
    detallearticulo: function(successCallback, errorCallback) {
        $.ajax({
            url: "/api/proyecto/2",
            method: "get",
            success: successCallback,
            error: errorCallback
        });
    },
};