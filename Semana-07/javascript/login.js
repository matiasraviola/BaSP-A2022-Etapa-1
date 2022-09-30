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
            arrayInput[0] = 'Email: Invalid Email';
            return false;
        }else if (email.value == ''){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert2, email.nextElementSibling);
            arrayInput[0] = 'Email: No spaces alowed!';
            return false;
        }else {
            email.classList.add("green-border");
            if (email.parentNode.contains(alert2)){
                email.parentNode.removeChild(alert2);
            }
            return true;
        }
        }
    email.onfocus = function (){
        email.classList.remove("green-border");
        email.classList.remove("red-border");
        if (email.parentNode.contains(alert2)){
            email.parentNode.removeChild(alert2);
        }
    }
    // Validation PW
    password.onblur = function (){
        var upper = 0;
        var lower = 0;
        var num  = 0;
        if (password.value.length < 8){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Password: Need more characters';
            return false;

        }else if (letterNumberValidation(password.value) == false ){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Password: Invalid Password';
            return false;
        }
        else if (num==0 || upper==0 || lower==0){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Password: Invalid Password';
            return false;
        } else{
            password.classList.add("green-border");
            if (password.parentNode.contains(alert1)){
                password.parentNode.removeChild(alert1);
            }
            return true;
        }
        // FUNCTIONS VALIDATIONS
        function letterNumberValidation(stringLetter){
            for (i=0; i < stringLetter.length; i++){
                if (stringLetter.charAt(i).toUpperCase() != stringLetter.charAt(i).toLowerCase()){
                    if (stringLetter.charAt(i) == stringLetter.charAt(i).toUpperCase()){
                        upper++;
                    }else{
                        lower++;
                    }
                }else if (numberValidation (stringLetter.charAt(i)) == true){
                        num++;
                    } else{
                        return false;
                }
            }
            return true;
            }
            function numberValidation (stringNumber){
                var numbers = ['0','1','2','3','4','5','6','7','8','9'];
                    if(numbers.includes(stringNumber)){
                        return true
                    }else{
                        return false
                    }
            }
        }

    password.onfocus = function (){
        password.classList.remove("green-border");
        password.classList.remove("red-border");
        if (password.parentNode.contains(alert1)){
            password.parentNode.removeChild(alert1);
        }
    }

    showPass.onclick = function(){
        password.type='text';
    }
    button.onclick = function(){
        var resultPass = password.onblur (password.value);
        var resultEmail= email.onblur(email.value);
        if (resultPass == true || resultEmail == true){
            alert('Welcome to Trackgenix ');
        }else{
            alert('Something goes wrong: '+ arrayInput[0]+' '+ arrayInput[1]);
        }
    }
}