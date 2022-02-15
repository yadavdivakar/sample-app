
function myfunction() {
    window.open("https://github.com");
}

document.getElementById("mylink").addEventListener("click", fblink)

function fblink() {
    window.open("https://www.facebook.com")
}

function validateForm() {

    if( document.myForm.firstname.value == "" ) {
       alert( "Please provide your firstname!" );
       document.myForm.firstname.focus();
       return false;
    }

    else if (document.myForm.lastname.value == "") {
        alert("Please provide your lastname!");
        document.myForm.lastname.focus();
        return false;

    }

    let phoneno = document.getElementById("phone")

    if (phoneno.value == "") {
        alert("Please provide your contact.");
        document.myForm.number.focus();
        return false;
    }

    else if (phoneno.value.length < 10) {
        alert("Mobile is not valid. Please enter 10 digit number");
    }

    return true;
}