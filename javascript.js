/*!
Maurice R. Ligon
MrLigon22@gmail.com

Javascript for validating confirm password on signup page,
and correct email and password combo on login page.

email: example@email.com
password: verify
*/

function passwordConfirm() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var ok = true;
    if (pass1 != pass2) {
        alert("Passwords do not match");
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        ok = false;
    }
    else {
        
    }
    return ok;
}

function noAccount(){
	var email = "example@email.com";
	var pass = "verfy";

	var email2 = document.getElementById("emaillogin").value;
	var pass2 = document.getElementById("passwordlogin").value;
	var ok = true;
	if(email != email2 && pass != pass2){
	document.getElementById("notFound").innerHTML = "We do not recognize your username and/or password.<br>"
	ok = false;
	}
	else {
		
	}
		return ok;
}