var form2 = document.getElementById("form-contact");








form2.addEventListener("submit", function(evt){
    var inputNombre = document.getElementById("nombre");
    var emailInput = document.getElementById('email');
    var apellidosInput = document.getElementById('apellidos');

    var textoArea = document.getElementById("area").value;
    var textoAreaDividido = textoArea.split(" ");
    var numeroPalabras = textoAreaDividido.length;

    if (inputNombre.checkValidity() == false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        evt.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() == false) {
        alert("Escribe tu email");
        email.focus();
        evt.preventDefault();
        return false;
    }
    if (apellidosInput.checkValidity() == false) {
        alert("Escribe tus apellidos");
        inputNombre.focus();
        evt.preventDefault();
        return false;
    }
    
    if(parseInt(numeroPalabras) >= 120){
        alert("Por favor, introduce menos de 120 palabras en el mensaje");
        evt.preventDefault();
        return false;
    }

    if(parseInt(numeroPalabras) <= 1){
        alert("Por favor, introduce tu comentario");
        evt.preventDefault();
        return false;
    }




});

