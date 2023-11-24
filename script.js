var usernameInput = document.getElementById("Username");
usernameInput.addEventListener ("blur", function() {
    var usernameValue = usernameInput.value;
    if(usernameValue === ""){
        alert("please enter the user name");
    }
});
var passwordInput = document.getElementById("Password");
passwordInput.addEventListener ("blur", function() {
    var passwordValue = passwordInput.value;
    if(passwordValue === ""){
        alert("please enter the password");
    }
    if(passwordValue.length < 10 ){
        alert("the password length cannot be under 10")
    }
});

