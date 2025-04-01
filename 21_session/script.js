document.getElementById("myForm").addEventListener
("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    let isValid = true;

    //Get input Value
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();


    //Get error Message elements
    let usernameError = document.getElementById("errorUsername");
    let passwordError = document.getElementById("errorPassword");
    let emailError = document.getElementById("errorEmail");

    // Clear previous error messages
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
    emailError.innerHTML = "";


// Username validation
if(username===""){
    usernameError.innerHTML = "Username is required";
    isValid = false;
}else if(username.length < 5){
    usernameError.innerHTML = "Username must be at least 5 characters long";
    isValid = false;
}

// Email validation
if(email===""){
    emailError.innerHTML = "Email is required";
    isValid = false;
}else if(!email.includes("@")){
    emailError.innerHTML = "Email must contain @ symbol";
    isValid = false;
}
else if(!email.includes(".")){
    emailError.innerHTML = "Email must contain . symbol";
    isValid = false;
}
// Password validation
if(password===""){
    passwordError.innerHTML = "Password is required";
    isValid = false;
}else if(password.length < 8){
    passwordError.innerHTML = "Password must be at least 8 characters long";
    isValid = false;
}
else if(!password.match(/[A-Z]/)){
    passwordError.innerHTML = "Password must contain at least one uppercase letter";
    isValid = false;
}
else if(!password.match(/[a-z]/)){
    passwordError.innerHTML = "Password must contain at least one lowercase letter";
    isValid = false;
}
else if(!password.match(/[0-9]/)){
    passwordError.innerHTML = "Password must contain at least one number";
    isValid = false;
}
else if(!password.match(/[^a-zA-Z0-9]/)){
    passwordError.innerHTML = "Password must contain at least one special character";
    isValid = false;
}

if(isValid){
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset(); // Reset the form after submission
}



});