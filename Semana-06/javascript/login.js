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
    var arrayInput = [];

    // VALIDACION DEL EMAIL
    email.onblur = function (){
        if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert2, email.nextElementSibling);
            arrayInput[0] = 'Invalid Email';
            return false;
        }else if (email.value == ''){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert2, email.nextElementSibling);
            arrayInput[0] = 'No spaces alowed!';
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
    password.onblur = function (){
        if (password.value.length < 8){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Need more characters';
            return false;

        }else if (!numberValidation(password.value)){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Need numbers';
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

    // function lettersValidation (letterString){
    //     var AZ = letterString.toUpperCase().charCodeAt(0);
    //     // return ascii > 64 && ascii <91;
    //     if ( AZ > 64 && AZ <91){
    //         return true;
    //         } return false;
    // }
    // function Letter(letterString){
    //     var Ascii = letterString.charCodeAt(0);
    //     // return ascii > 64 && ascii <91;
    //     if ( (Ascii > 64 && Ascii <91)){
    //         return true;
    //     } else if((AZ > 96 && AZ < 123)){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // function isChars(myString) {
    //     for (var x = 0 ; x < myString.length; x++) {
    //       if (!((myString[x] >= 'a' && myString[x] <= 'z') || (myString[x] >= 'A' && myString[x] <= 'Z'))) {
    //         return false;
    //       }
    //     }
    //     return true;
    // }
    showPass.onclick = function(){
        password.type='text';
    }
    button.onclick = function(){
        var resultPass = password.onblur (password.value);
        var resultEmail= email.onblur(email.value);
        if (resultPass == true && resultEmail == true){
            alert('Welcome to Trackgenix');
        }else{
            alert('Something goes wrong: '+ arrayInput[0]+' '+ arrayInput[1]);
        }
    }
    console.log('hola');
}