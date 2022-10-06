window.onload = function(){
    var button = document.getElementById('btn-create');
    var arrayInput = [];

    var fName = document.getElementById('name');
    var alert0 = document.createElement('p');
    alert0.innerHTML = 'Invalid Name';

    var lName = document.getElementById('last-name');
    var alert1 = document.createElement('p');
    alert1.innerHTML = 'Invalid last name';

    var id = document.getElementById('id');
    var alert2 = document.createElement('p');
    alert2.innerHTML = "Invalid Id";

    var dob = document.getElementById('date');
    var alert3 = document.createElement('p');
    alert3.innerHTML = "Invalid Date";

    var tel = document.getElementById('telephone');
    var alert4 = document.createElement('p');
    alert4.innerHTML = "Invalid Telephone";

    var address = document.getElementById('address');
    var alert5 = document.createElement('p');
    alert5.innerHTML = "Invalid Address";

    var location = document.getElementById('location');
    var alert6 = document.createElement ('p');
    alert6.innerHTML = 'Invalid Location';

    var zip = document.getElementById('zip');
    var alert7 = document.createElement('p');
    alert7.innerHTML = "Invalid ZIP code";

    var email = document.getElementById('email');
    var alert8 = document.createElement('p');
    alert8.innerHTML = 'Invalid Email';
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var pw1 = document.getElementById ('pw1');
    var alert9 = document.createElement('p');
    alert9.innerHTML = 'Invalid password';

    var pw2 = document.getElementById('pw2');
    var alert10 = document.createElement('p');
    alert10.innerHTML = "Passwords don't match";
    var alert11 = document.createElement('p');
    alert11.innerHTML = "No spaces alowed";
    var lettCount= 0;
    var numCount = 0;
    var upper = 0;
    var lower = 0;
    //alert0 and arrayInput[0] --> name
    //alert1 and arrayInput[1] --> last name
    //alert2 and arrayInput[2] --> id
    //alert3 and arrayInput[3] --> date
    //alert4 and arrayInput[4] --> telephone
    //alert5 and arrayInput[5] --> address
    //alert6 and arrayInput[6] --> location
    //alert7 and arrayInput[7] --> zip code
    //alert8 and arrayInput[8] --> email
    //alert9 and arrayInput[9] --> pw
    //alert10, alert 11 and arrayInput[10] --> repeat pw

    // FUNCTIONS VALIDATIONS
    function validationNames (input){
        for (i=0; i < input.length; i++){
            if (input.charAt(i).toUpperCase() == input.charAt(i).toLowerCase()){
                return false
            }
        }
        return true
    }
    function letNumSpaceValidation(stringLetter){
        lettCount = 0;
        numCount = 0;
        for (i=0; i < stringLetter.length; i++){
            if (stringLetter.charAt(i).toUpperCase() != stringLetter.charAt(i).toLowerCase()){
                lettCount++
            }else if (numberValidation (stringLetter.charAt(i))){
                numCount++;
            } else if (stringLetter.charAt(i) != ' '){
                return false;
            }
        }
        return true;
        }
    function letNumValidation (stringLetter){
        lettCount= 0;
        numCount = 0;
        for (i=0; i < stringLetter.length; i++){
            if (stringLetter.charAt(i).toUpperCase() != stringLetter.charAt(i).toLowerCase()){
                lettCount++
            }else if (numberValidation (stringLetter.charAt(i))){
                    numCount++;
            } else{
                    return false;
            }
        }
        return true;
        }
    function letterNumberValidation(stringLetter){
        upper = 0;
        lower = 0;
        numCount = 0;
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
    function spaceValidation (stringLetter){
        var spaceCount = 0;
        for(i = 0; i <= address.value.length; i++){
             if (stringLetter.charAt(i) == ' '){
                 spaceCount++;
             }
         }
         return spaceCount;
     }
    //REQUEST
    function request (fName,lName,id,dob,tel,address,location,zip,email,pw1){
        var parameters = 'name='+fName+'&lastName='+lName+'&dni='+id+'&dob='+dobCorrection(dob)+'&phone='+tel+'&address='+address+'&city='
        +location+'&zip='+zip+'&email='+email+'&password='+pw1
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?'+ parameters)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                if (data.success){
                    alertModalRes (true,data);
                    // alert('Succeful: '+ data.msg+'\n'+ fName +': '+arrayInput[0]+'\n'+ lName +': '+ arrayInput[1]+'\n'+ id +': '+ arrayInput[2]+'\n'+ dob +': '+ arrayInput[3]+'\n'
                    // + tel +': '+ arrayInput[4]+'\n'+ address +': '+ arrayInput[5]+'\n'+ location +': '+ arrayInput[6]+'\n'+ zip +': '+ arrayInput[7]+'\n'+ email +': '+ arrayInput[8]+'\n'+ pw1 +': '+ arrayInput[9]+'\n'
                    // + pw2 +': '+ arrayInput[10]);
                    dataStorage(data);
                    console.log(data)
                }else{
                    alertModalRes (false,data);
                    // alert('Error: ' + data.msg+'\n'+ fName.value +' '+arrayInput[0]+'\n'+ lName.value +' '+ arrayInput[1]+'\n'+ id.value +' '+ arrayInput[2]+'\n'+ dob.value +' '+ arrayInput[3]+'\n'
                    // + tel.value +' '+ arrayInput[4]+'\n'+ address.value +' '+ arrayInput[5]+'\n'+ location.value +' '+ arrayInput[6]+'\n'+ zip.value +' '+ arrayInput[7]+'\n'+ email.value +' '+ arrayInput[8]+'\n'+ pw1.value +' '+ arrayInput[9]+'\n'
                    // + pw2.value +' '+ arrayInput[10])
                }
            console.log(data);
            })
            .catch(function (error){
                console.log(error);
            })
        }
    //request modal function
    function alertModalRes (bool,data){
        if (bool =! false){
            var modalMsg = document.createElement('p');
            modalMsg.innerHTML = 'Succeful: '+ data.msg + fName +': '+arrayInput[0]+ lName +': '+ arrayInput[1]+ id +': '+ arrayInput[2]+ dob +': '+ arrayInput[3]+'\n'
            + tel +': '+ arrayInput[4]+ address +': '+ arrayInput[5]+ location +': '+ arrayInput[6]+ zip +': '+ arrayInput[7]+ email +': '+ arrayInput[8]+ pw1 +': '+ arrayInput[9]
            + pw2 +': '+ arrayInput[10];
            span.parentNode.insertBefore(modalMsg, span.nextElementSibling);
        }else{
            var modalMsg = document.createElement('p');
            modalMsg.innerHTML = 'Error: ' + data.msg + fName.value +' '+arrayInput[0] + lName.value +' '+ arrayInput[1] + id.value +' '+ arrayInput[2]+'\n'+ dob.value +' '+ arrayInput[3]+'\n'
            + tel.value +' '+ arrayInput[4] + address.value +' '+ arrayInput[5] + location.value +' '+ arrayInput[6] + zip.value +' '+ arrayInput[7] + email.value +' '+ arrayInput[8] + pw1.value +' '+ arrayInput[9] 
            + pw2.value +' '+ arrayInput[10]
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
        modalMsg.innerHTML = 'Welcome to Trackgenix: \n' + fName.value +' '+arrayInput[0]+'\n'+ lName.value +' '+ arrayInput[1]+'\n'
        + id.value +' '+ arrayInput[2]+'\n'+ dob.value +' '+ arrayInput[3]+'\n'+ tel.value +' '+ arrayInput[4]+'\n'
        + address.value +' '+ arrayInput[5]+'\n'+ location.value +' '+ arrayInput[6]+'\n'+ zip.value +' '
        + arrayInput[7]+'\n'+ email.value +' '+ arrayInput[8]+'\n'+ pw1.value +' '+ arrayInput[9]+'\n'
        + pw2.value +' '+ arrayInput[10];
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
    //date correction
    var dobCorrection = function(dob){
        var arrayDob = dob.split('-');
        return arrayDob[1]+'/'+arrayDob[2]+'/'+arrayDob[0];
    }
    //Local Storage
    function dataStorage (data){
        localStorage.setItem('name', data.data.name);
        localStorage.setItem('lastName', data.data.lastName);
        localStorage.setItem('dni', data.data.dni);
        localStorage.setItem('dob', data.data.dob);
        localStorage.setItem('phone', data.data.phone);
        localStorage.setItem('address', data.data.address);
        localStorage.setItem('city', data.data.city);
        localStorage.setItem('zip', data.data.zip);
        localStorage.setItem('email', data.data.email);
        localStorage.setItem('password', data.data.password);
    }
    function getStorage (){
        fName.value = localStorage.getItem('name');
        lName.value = localStorage.getItem('lastName');
        id.value = localStorage.getItem('dni');
        dob.value = localStorage.getItem(dobCorrection(dob));
        tel.value = localStorage.getItem('phone');
        address.value = localStorage.getItem('address');
        location.value = localStorage.getItem('city');
        zip.value = localStorage.getItem('zip');
        email.value = localStorage.getItem('email');
        pw1.value = localStorage.getItem('password');
        pw2.value = localStorage.getItem('password');
    }
        //NAME
    fName.onblur = function(){
        if(fName.value.length < 4){
            fName.classList.add("red-border");
            fName.parentNode.insertBefore(alert0, fName.nextElementSibling);
            arrayInput[0] = 'Name: Need more characters';
            return false
        }else if (validationNames (fName.value) != true) {
            fName.classList.add("red-border");
            fName.parentNode.insertBefore(alert0, fName.nextElementSibling);
            arrayInput[0] = 'Name: Invalid Name';
            return false
        }else{
            fName.classList.add("green-border");
            arrayInput[0] = 'Name: Successful';
            return true
        }
    }
    fName.onfocus = function (){
        fName.classList.remove("green-border");
        fName.classList.remove("red-border");
        if (fName.parentNode.contains(alert0)){
            fName.parentNode.removeChild(alert0);
        }
    }
    //LAST NAME
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
            arrayInput[1] = 'Last Name: Successful';
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
    //ID
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
            arrayInput[2] = 'ID: Successful';
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
    // DATE OF BIRTH
    dob.onblur = function (){
        if (dob.value == ''){
            dob.classList.add("red-border");
            dob.parentNode.insertBefore(alert3, dob.nextElementSibling);
            arrayInput[3] = 'Date of birth: Invalid date';
            return false
        }else{
            dob.classList.add("green-border");
            arrayInput[3] = 'Date: Successful';
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
    // TELEPHONE
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
                arrayInput[4] = 'Telephone: Successful';
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
    // ADDRESS
    address.onblur = function(){
        if (address.value.length < 5){
            address.classList.add("red-border");
            address.parentNode.insertBefore(alert5, address.nextElementSibling);
            arrayInput[5] = 'Address: Need more';
            return false
        }else if(letNumSpaceValidation (address.value) == false){
            address.classList.add("red-border");
            address.parentNode.insertBefore(alert5, address.nextElementSibling);
            arrayInput[5] = 'Address: Need number and letters';
            return false
        }else if    (lettCount== 0 || numCount ==0){
            address.classList.add("red-border");
            address.parentNode.insertBefore(alert5, address.nextElementSibling);
            arrayInput[5] = 'Address: Need more';
            return false
        }else if(address.value.substring(0,1) == ' ' || address.value.substring(address.value.length - 1) == ' '){
            address.classList.add("red-border");
            address.parentNode.insertBefore(alert5, address.nextElementSibling);
            arrayInput[5] = "Address: You can't star/finish with a withe spaces";
            return false
        }else if(spaceValidation(address.value) == 0){
            address.classList.add("red-border");
            address.parentNode.insertBefore(alert5, address.nextElementSibling);
            arrayInput[5] = 'Address: Need a space between letter and numbers';
            return false
        }else{
            address.classList.add("green-border");
            arrayInput[5] = 'Address: Successful';
            return true
        }
        }
    address.onfocus = function (){
        address.classList.remove("green-border");
        address.classList.remove("red-border");
        if (address.parentNode.contains(alert5)){
            address.parentNode.removeChild(alert5);
        }
    }
    //LOCATION
    location.onblur = function (){
    if (location.value.length < 3){
        location.classList.add("red-border");
        location.parentNode.insertBefore(alert6, location.nextElementSibling);
        arrayInput[6] = 'Locationneed more characters';
        return false
    }else if(letNumValidation(location.value) == false){
        location.classList.add("red-border");
        location.parentNode.insertBefore(alert6, location.nextElementSibling);
        arrayInput[6] = 'Location: Invalid Location';
        return false
    }else if    (lettCount< 4 || numCount == 0){
        location.classList.add("red-border");
        location.parentNode.insertBefore(alert6, location.nextElementSibling);
        arrayInput[6] = 'Location: Invalid Location2';
        return false
    }else{
        location.classList.add("green-border");
        arrayInput[6] = 'Location: Successful';
        return true
    }
    }
    location.onfocus = function (){
        location.classList.remove("green-border");
        location.classList.remove("red-border");
        if (location.parentNode.contains(alert6)){
            location.parentNode.removeChild(alert6);
        }
    }
    // ZIP CODE
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
            arrayInput[7] = 'Zip Code: Successful';
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
    //EMAIL
    email.onblur = function (){
        if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert8, email.nextElementSibling);
            arrayInput[8] = 'Email: Invalid Email';
            return false;
        }else if (email.value == ''){
            email.classList.add("red-border");
            email.parentNode.insertBefore(alert8, email.nextElementSibling);
            arrayInput[8] = 'Email: No spaces alowed!';
            return false;
        }else {
            email.classList.add("green-border");
            if (email.parentNode.contains(alert8)){
                email.parentNode.removeChild(alert8);
            }
            arrayInput[8] = 'Email: Successful';
            return true;
        }
        }
    email.onfocus = function (){
        email.classList.remove("green-border");
        email.classList.remove("red-border");
        if (email.parentNode.contains(alert8)){
            email.parentNode.removeChild(alert8);
        }
    }
     //PASSWORD 1
    pw1.onblur = function (){
        if (pw1.value.length < 8){
            pw1.classList.add("red-border");
            pw1.parentNode.insertBefore(alert9, pw1.nextElementSibling);
            arrayInput[9] = 'Password: Need more characters';
            return false;

        }else if (letterNumberValidation(pw1.value) == false ){
            pw1.classList.add("red-border");
            pw1.parentNode.insertBefore(alert9, pw1.nextElementSibling);
            arrayInput[9] = 'Passwrod: Invalid password';
            return false;
        }
        else if (numCount==0 || upper==0 || lower==0){
            pw1.classList.add("red-border");
            pw1.parentNode.insertBefore(alert9, pw1.nextElementSibling);
            arrayInput[9] = 'Password: Invalid password';
            return false;
        } else{
            pw1.classList.add("green-border");
            arrayInput[9] = 'Password: Successful';
            if (pw1.parentNode.contains(alert9)){
                pw1.parentNode.removeChild(alert9);
            }
            return true;
        }
        }
    pw1.onfocus = function (){
        pw1.classList.remove("green-border");
        pw1.classList.remove("red-border");
        if (pw1.parentNode.contains(alert9)){
            pw1.parentNode.removeChild(alert9);
        }
    }
    //PASSSWORD 2
    pw2.onblur = function (){
        if (pw1.value != pw2.value){
            pw2.classList.add("red-border");
            pw2.parentNode.insertBefore(alert10, pw2.nextElementSibling);
            arrayInput[10] = "Password: Passwords don't match";
            return false;
        }else if(pw2.value == ''){
            pw2.classList.add("red-border");
            pw2.parentNode.insertBefore(alert11, pw2.nextElementSibling);
            arrayInput[10] = 'Password: No spaces alowed!';
            return false;

        }else{
            pw2.classList.add("green-border");
            if (pw2.parentNode.contains(alert10)){
                pw2.parentNode.removeChild(alert10);
            }
            arrayInput[10] = 'Repeat Password: Successful';
            return true;
        }
    }
    pw2.onfocus = function (){
        pw2.classList.remove("green-border");
        pw2.classList.remove("red-border");
        if (pw2.parentNode.contains(alert10)){
            pw2.parentNode.removeChild(alert10);
        }
        if (pw2.parentNode.contains(alert11)){
            pw2.parentNode.removeChild(alert11);
        }
    }
    //BUTTON
    button.onclick = function(){
        var resultName = fName.onblur(fName.value);
        var resultlName = lName.onblur(lName.value);
        var resultId = id.onblur(id.value);
        var resultDob = dob.onblur(dob.value);
        var resultTel = tel.onblur(tel.value);
        var resultAddress = address.onblur (address.value);
        var resultLoc = location.onblur(location.value);
        var resultZip = zip.onblur(zip.value);
        var resultEmail= email.onblur(email.value);
        var resultPass1 = pw1.onblur (pw1.value);
        var resultPass2 = pw2.onblur (pw2.value);
        if (resultName && resultlName  && resultId && resultDob && resultTel &&resultAddress && resultLoc && resultZip
            && resultPass2 && resultPass1 && resultEmail ){
            // alert('Welcome to Trackgenix: \n' + fName.value +' '+arrayInput[0]+'\n'+ lName.value +' '+ arrayInput[1]+'\n'
            // + id.value +' '+ arrayInput[2]+'\n'+ dob.value +' '+ arrayInput[3]+'\n'+ tel.value +' '+ arrayInput[4]+'\n'
            // + address.value +' '+ arrayInput[5]+'\n'+ location.value +' '+ arrayInput[6]+'\n'+ zip.value +' '
            // + arrayInput[7]+'\n'+ email.value +' '+ arrayInput[8]+'\n'+ pw1.value +' '+ arrayInput[9]+'\n'
            // + pw2.value +' '+ arrayInput[10]);
            modal.style.display = "block";
            alertModalVal();
            request(fName.value,lName.value,id.value,dob.value,tel.value,address.value,location.value,zip.value,
            email.value, pw1.value,pw2.value);

        }else{
            // alert('Something goes wrong: ' + arrayInput[0]+'\n' + arrayInput[1]+'\n'+ arrayInput[2]+'\n'+ arrayInput[3]+'\n'
            // + arrayInput[4]+'\n'+ arrayInput[5]+'\n'+ arrayInput[6]+'\n'+ arrayInput[7]+'\n'+ arrayInput[8]+'\n'+ arrayInput[9]+'\n'
            // + arrayInput[10]);
            modal.style.display = "block";
            alertModalVal();
        }
    }
    localStorage.clear()
    if (localStorage.length != 0){
        getStorage ();
    }
}
