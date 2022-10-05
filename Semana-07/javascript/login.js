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
    upper = 0;
    lower = 0;
    numCount = 0;
    // FUNCTIONS VALIDATIONS
    function letterNumberValidation(stringLetter){

        for (i=0; i < stringLetter.length; i++){
            if (stringLetter.charAt(i).toUpperCase() != stringLetter.charAt(i).toLowerCase()){
                if (stringLetter.charAt(i) == stringLetter.charAt(i).toUpperCase()){
                    upper++;
                }else{
                    lower++;
                }
            }else if (numberValidation (stringLetter.charAt(i))){
                    numCount++;
            } else{
                    return false;
            }
        }
        return true;
        }
        function numberValidation (stringNumber){
            var numbers = ['0','1','2','3','4','5','6','7','8','9'];
                return (numbers.includes(stringNumber));
        }
    //REQUEST
    function request (email, password){
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+email+'&password='+password)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                if (data.success){
                    alertModalRes (true,data);
                    // alert('Succeful: '+ data.msg+'\n' + email.value +' :'+arrayInput[0]+'\n'+ password.value +' :'+ arrayInput[1]);
                }else{
                    alertModalVal(false,data);
                    // alert('Error: ' + data.msg+'\n'+ email.value +' :'+ arrayInput[0] +'\n'+ password.value +' :'+  arrayInput[1])
                }
            console.log(data);
            })
            .catch(function (error){
                console.log(error);
            })
        }
        function alertModalVal (){
            var modalMsg = document.createElement('p');
            modalMsg.innerHTML = 'Welcome to Trackgenix: \n' + email.value +' '+arrayInput[0]+'\n'+ password.value +' '+ arrayInput[1];
            span.parentNode.insertBefore(modalMsg, span.nextElementSibling);
       }
        //request modal function
    function alertModalRes (bool,data){
        if (bool =! false){
            var modalMsg = document.createElement('p');
            modalMsg.innerHTML = 'Succeful: '+ data.msg + email +': '+arrayInput[0]+ password +': '+ arrayInput[1];
            span.parentNode.insertBefore(modalMsg, span.nextElementSibling);
        }else{
            var modalMsg = document.createElement('p');
            modalMsg.innerHTML = 'Error: ' + data.msg + email.value +' '+arrayInput[0] + password.value +' '+ arrayInput[1];
            span.parentNode.insertBefore(modalMsg, span.nextElementSibling);
        }
   }
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
   function alertModalVal (){
        var modalMsg = document.createElement('p');
        modalMsg.innerHTML = 'Welcome to Trackgenix: \n' + email.value +' '+arrayInput[0]+'\n'+ password.value +' '+ arrayInput[1];
        span.parentNode.insertBefore(modalMsg, span.nextElementSibling);
   }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
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
            arrayInput[0] = 'Email: Email Succeful\n';
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
        if (password.value.length < 8){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Password: Need more characters';
            return false;

        }else if (letterNumberValidation(password.value) == false ){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Passwrod: Invalid password';
            return false;
        }
        else if (numCount==0 || upper==0 || lower==0){
            password.classList.add("red-border");
            password.parentNode.insertBefore(alert1, password.nextElementSibling);
            arrayInput[1] = 'Password: Invalid password';
            return false;
        } else{
            password.classList.add("green-border");
            arrayInput[1] = 'Password: Successful';
            if (password.parentNode.contains(alert1)){
                password.parentNode.removeChild(alert1);
            }
            return true;
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
        if (resultPass  && resultEmail){
            modal.style.display = "block";
            alertModalVal ()
            // alert('Welcome to Trackgenix :\n' + email.value +' '+arrayInput[0]+'\n'+ password.value +' '+ arrayInput[1]);
            request(email.value, password.value);
        }else{
            modal.style.display = "block";
            alertModalVal ();
            // alert('Something goes wrong: '+ email.value +' '+ arrayInput[0] +'\n'+ password.value +' '+  arrayInput[1]);
        }
    }

}
