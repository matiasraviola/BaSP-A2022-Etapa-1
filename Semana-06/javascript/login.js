window.onload = function(){
    var email = document.getElementById('input-email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var password = document.getElementById ('password');


    // VALIDACION DEL EMAIL
email.onblur = function (){
    if (emailExpression.test(email.value)){
        email.classList.add("green-border");
    }else{
            email.classList.add("red-border");
        }
    }
email.onfocus = function (){
    email.classList.remove("green-border");

    email.classList.remove("red-border");
}
// Validar: espacios en blanco PW.

// Validacio: longitud de PW.
password.onblur = function (){
    var espacios = false;
    var cont = 0;
    var alert1 = document.createElement('p');
    alert1.innerHTML = 'Invalid Password'
    if (password.value.length >= 8){
        password.classList.add("green-border");
        password.parentNode.removeChild(alert1);
    }else{
        password.classList.add("red-border");
        password.parentNode.insertBefore(alert1, password.nextElementSibling);
    }
    // while (!espacios && (cont < p1.length)) {
    //     if (p1.charAt(cont) == " ")
    //         espacios = true;
    //         cont++;
    //     }
    // if (espacios) {
    //     alert ("Password cannot contain blank spaces");
    //     return false;
    // }
password.onfocus = function (){
    password.classList.remove("green-border");
    password.classList.remove("red-border");
}
}






    console.log('hola');
}