window.onload = function(){
    // email
    var email = document.getElementById('email');
    var alert9 = document.createElement('p');
    alert9.innerHTML = 'Invalid Email';
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    // pasword 1
    var pw1 = document.getElementById ('pw1');
    var alert10 = document.createElement('p');
    alert10.innerHTML = 'Invalid password';
    // password 2
    var pw2 = document.getElementById('pw2');
    var alert11 = document.createElement('p');
    alert11.innerHTML = "Passwords don't match";
    var alert12 = document.createElement('p');
    alert12.innerHTML = "No spaces alowed";
   //----------------------------
    var button = document.getElementById('btn-create');
    var arrayInput = [];
    // name
    var name = document.getElementById('name');
    var alert0 = document.createElement('p');
    alert0.innerHTML = 'Invalid Name';
    // last name
    var lName = document.getElementById('last-name');
    var alert1 = document.createElement('p');
    alert1.innerHTML = 'Invalid last name';
    // id
    var id = document.getElementById('id');
    var alert2 = document.createElement('p');
    alert2.innerHTML = "Invalid Id";
    // date of birth
    var dob = document.getElementById('date');
    var alert3 = document.createElement('p');
    alert3.innerHTML = "Invalid Date";
    // TELEPHONE
    var tel = document.getElementById('telephone');
    var alert4 = document.createElement('p');
    alert4.innerHTML = "Invalid Telephone";
    //ZIP
    var zip = document.getElementById('zip');
    var alert7 = document.createElement('p');
    alert7.innerHTML = "Invalid ZIP code";
    //LOCATION
    var location = document.getElementById('location');
    var alert6 = document.createElement ('p');
    alert6.innerHTML = 'Invaliz Location';
    // ADDREES


    //VALIDATION NAME
    name.onblur = function(){
        if(name.value.length < 3){
            name.classList.add("red-border");
            name.parentNode.insertBefore(alert0, name.nextElementSibling);
            arrayInput[0] = 'Name: Need more characters';
            return false
        }else if (validationNames (name.value) != true) {
            name.classList.add("red-border");
            name.parentNode.insertBefore(alert0, name.nextElementSibling);
            arrayInput[0] = 'Name: Invalid Name';
            return false
        }else{
            name.classList.add("green-border");
            return true
        }
    }
    name.onfocus = function (){
        name.classList.remove("green-border");
        name.classList.remove("red-border");
        if (name.parentNode.contains(alert0)){
            name.parentNode.removeChild(alert0);
        }
    }
    function validationNames (input){
        for (i=0; i < input.length; i++){
            if (input.charAt(i).toUpperCase() == input.charAt(i).toLowerCase()){
                return false
            }
        }
        return true
    }
    // VALIDATION LAST NAME
    lName.onblur = function(){
        if(lName.value.length < 3){
            lName.classList.add("red-border");
            lName.parentNode.insertBefore(alert1, lName.nextElementSibling);
            arrayInput[1] = 'Last Name: Need more characters';
            return false
        }else if (validationNames (lName.value) != true) {
            lName.classList.add("red-border");
            lName.parentNode.insertBefore(alert1, lName.nextElementSibling);
            arrayInput[1] = 'Last Name: Invalid Name';
            return false
        }else{
            lName.classList.add("green-border");
            return true
        }
    }
    lName.onfocus = function (){
        lName.classList.remove("green-border");
        lName.classList.remove("red-border");
        if (lName.parentNode.contains(alert1)){
            lName.parentNode.removeChild(alert1);
        }
    }
    // VALIDATION ID
    id.onblur = function (){
        if (id.value.length < 8){
            id.classList.add("red-border");
            id.parentNode.insertBefore(alert2, id.nextElementSibling);
            arrayInput[2] = 'ID: Need more characters';
            return false
        }else if(validationNames (id.value) != false){
            id.classList.add("red-border");
            id.parentNode.insertBefore(alert2, id.nextElementSibling);
            arrayInput[2] = 'ID: Only Numbers';
            return false
        }else{
            id.classList.add("green-border");
            return true
        }
    }
    id.onfocus = function (){
        id.classList.remove("green-border");
        id.classList.remove("red-border");
        if (id.parentNode.contains(alert2)){
            id.parentNode.removeChild(alert2);
        }
    }

    // VALIDATION DATE OF BIRTH
    dob.onblur = function (){
        if (dob.value == ''){
            dob.classList.add("red-border");
            dob.parentNode.insertBefore(alert3, dob.nextElementSibling);
            arrayInput[3] = 'Date of birth: Invalid date';
            return false
        }else{
            dob.classList.add("green-border");
            return true
        }
        }
    dob.onfocus = function (){
         dob.classList.remove("green-border");
        dob.classList.remove("red-border");
        if (dob.parentNode.contains(alert3)){
            dob.parentNode.removeChild(alert3);
        }
    }
    // VALIDATION TELEPHONE
    tel.onblur = function(){
            if (tel.value.length != 10){
                tel.classList.add("red-border");
                tel.parentNode.insertBefore(alert4, tel.nextElementSibling);
                arrayInput[4] = 'Telephone: Need more characters';
                return false
            }else if(validationNames (tel.value) != false){
                tel.classList.add("red-border");
                tel.parentNode.insertBefore(alert4, tel.nextElementSibling);
                arrayInput[4] = 'Telephone: Only Numbers';
                return false
            }else{
                tel.classList.add("green-border");
                return true
            }
        }
        tel.onfocus = function (){
            tel.classList.remove("green-border");
            tel.classList.remove("red-border");
            if (tel.parentNode.contains(alert4)){
                tel.parentNode.removeChild(alert4);
            }
        }
    // VALIDATION ADDRESS

    // VALIDATION LOCATION
    location.onblur = function (){
        lett = 0;
        num = 0;
        if (locationValidation(location.value) == false){
            location.classList.add("red-border");
            location.parentNode.insertBefore(alert6, location.nextElementSibling);
            arrayInput[6] = 'Location: Invalid Location';
            return false
        }else if (lett == 0 || lett < 4 || num == 0){
            location.classList.add("red-border");
            location.parentNode.insertBefore(alert6, location.nextElementSibling);
            arrayInput[6] = 'Location: Invalid Location';
            return false
        }else{
            location.classList.add("green-border");
            return true
        }


        function locationValidation(stringLetter){
            for (i=0; i < stringLetter.length; i++){
                if (stringLetter.charAt(i).toUpperCase() != stringLetter.charAt(i).toLowerCase()){
                    lett++
                }else if (numberValidation (stringLetter.charAt(i)) == true){
                        num++;
                } else{
                        return false;
                }
            }
            return true;
            }
    }
    location.onfocus = function (){
        location.classList.remove("green-border");
        location.classList.remove("red-border");
        if (location.parentNode.contains(alert6)){
            location.parentNode.removeChild(alert6);
        }
    }
    // VALIDATION  ZIP CODE
    zip.onblur = function (){
        if (zip.value.length < 4 || zip.value.length > 5){
            zip.classList.add("red-border");
            zip.parentNode.insertBefore(alert7, zip.nextElementSibling);
            arrayInput[7] = 'Zip Code: ';
            return false
        }else if(validationNames (zip.value) != false){
            zip.classList.add("red-border");
            zip.parentNode.insertBefore(alert7, zip.nextElementSibling);
            arrayInput[7] = 'Zip Code: Only Numbers';
            return false
        }else{
            zip.classList.add("green-border");
            return true
        }
    }
    zip.onfocus = function (){
        zip.classList.remove("green-border");
        zip.classList.remove("red-border");
        if (zip.parentNode.contains(alert7)){
            zip.parentNode.removeChild(alert7);
        }
    }
    // VALIDATION EMAIL
    email.onblur = function (){
        if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert9, email.nextElementSibling);
            arrayInput[9] = 'Email: Invalid Email';
            return false;
        }else if (email.value == ''){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert9, email.nextElementSibling);
            arrayInput[9] = 'Email: No spaces alowed!';
            return false;
        }else {
            email.classList.add("green-border");
            if (email.parentNode.contains(alert9)){
                email.parentNode.removeChild(alert9);
            }
            return true;
        }
        }
    email.onfocus = function (){
        email.classList.remove("green-border");
        email.classList.remove("red-border");
        if (email.parentNode.contains(alert9)){
            email.parentNode.removeChild(alert9);
        }
    }
    // VALIDATION PW
    pw1.onblur = function (){
        var upper = 0;
        var lower = 0;
        var num  = 0;
        if (pw1.value.length < 8){
            pw1.classList.add("red-border");
            pw1.parentNode.insertBefore(alert10, pw1.nextElementSibling);
            arrayInput[10] = 'Password: Need more characters';
            return false;

        }else if (letterNumberValidation(pw1.value) == false ){
            pw1.classList.add("red-border");
            pw1.parentNode.insertBefore(alert10, pw1.nextElementSibling);
            arrayInput[10] = 'Passwrod: Invalid password';
            return false;
        }
        else if (num==0 || upper==0 || lower==0){
            pw1.classList.add("red-border");
            pw1.parentNode.insertBefore(alert10, pw1.nextElementSibling);
            arrayInput[10] = 'Password: Invalid password';
            return false;
        } else{
            pw1.classList.add("green-border");
            if (pw1.parentNode.contains(alert10)){
                pw1.parentNode.removeChild(alert10);
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
        }
        function numberValidation (stringNumber){
            var numbers = ['0','1','2','3','4','5','6','7','8','9'];
                if(numbers.includes(stringNumber)){
                    return true
                }else{
                    return false
                }
        }

    pw1.onfocus = function (){
        pw1.classList.remove("green-border");
        pw1.classList.remove("red-border");
        if (pw1.parentNode.contains(alert10)){
            pw1.parentNode.removeChild(alert10);
        }
    }
    pw2.onblur = function (){
        if (pw1.value != pw2.value){
            pw2.classList.add("red-border");
            pw2.parentNode.insertBefore(alert11, pw2.nextElementSibling);
            arrayInput[10] = "Password: Passwords don't match";
            return false;
        }else if(pw2.value == ''){
            pw2.classList.add("red-border");
            pw2.parentNode.insertBefore(alert12, pw2.nextElementSibling);
            arrayInput[10] = 'Password: No spaces alowed!';
            return false;

        }else{
            pw2.classList.add("green-border");
            if (pw2.parentNode.contains(alert11)){
                pw2.parentNode.removeChild(alert11);
            }
            return true;
        }
    }
    pw2.onfocus = function (){
        pw1.classList.remove("green-border");
        pw1.classList.remove("red-border");
        if (pw2.parentNode.contains(alert11)){
            pw2.parentNode.removeChild(alert11);
        }
        if (pw2.parentNode.contains(alert12)){
            pw2.parentNode.removeChild(alert12);
        }
    }
    button.onclick = function(){
        var resultPass = pw1.onblur (pw1.value);
        var resultEmail= email.onblur(email.value);
        if (resultPass == true || resultEmail == true){
            alert('Welcome to Trackgenix');
        }else{
            alert('Something goes wrong: '+ arrayInput[0]+' '+ arrayInput[1]);
        }
    }
    console.log('hola');
}
