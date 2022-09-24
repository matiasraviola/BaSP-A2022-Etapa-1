window.onload = function(){
    var email = document.getElementById('input-email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var password = document.getElementById ('password');
    var alert1 = document.createElement('p');
    alert1.innerHTML = 'Invalid Password';
    var alert2 = document.createElement('p');
    alert2.innerHTML = 'Invalid Email';
    var showPass = document.getElementById('show-password');
    var button = document.getElementById('button-login');


    // VALIDACION DEL EMAIL
    email.onblur = function emailOb (){
        if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert2, email.nextElementSibling);
            return false;
        }else if (email.value == ''){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert2, email.nextElementSibling);
            return false;
        }else {
            email.classList.add("green-border");
            email.parentNode.removeChild(alert2);
            return true;
        }
        }
    email.onfocus = function (){
        email.classList.remove("green-border");
        email.classList.remove("red-border");
        email.parentNode.removeChild(alert2);
    }
    // Validation PW
    password.onblur = function passwordOb (){
        // var espacios = false;
        // var cont = 0;
        //Validation: > 8
        if (password.value.length < 8){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            return false;

        }else if (!numberValidation(password.value)){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            return false;
        }
        else{
            password.classList.add("green-border");
            password.parentNode.removeChild(alert1);
            return true;
        }
    }
    password.onfocus = function (){
        password.classList.remove("green-border");
        password.classList.remove("red-border");
        password.parentNode.removeChild(alert1);
    }

    function numberValidation (stringNumber){
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        for (i=0; i < stringNumber.length; i++){
            if(numbers.includes(stringNumber[i])){
                return true
            }
        }
    }
    showPass.onclick = function(){
        password.type='text'
    }
    button.onclick = function(){
        var resultPass = passswordOb ();
        var resultEmail= emailOb();
        if (resultPass == true && resultEmail == true){
            alert('')
        }
    }

    console.log('hola');
}