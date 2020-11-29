// selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// event handler
form.addEventListener('submit', function(e){
    e.preventDefault(); //data will not submit to the server
    checkInputs();
});


// funcitons
 function checkInputs(){
     const usernamevalue = username.value.trim();
     const emailvalue = email.value.trim();
     const password1value = password1.value;
     const password2value = password2.value;
     
    if (usernamevalue === "") {
        showError(username, "Username can not be blank");
    }else if(!isUserNameValid(usernamevalue)){
        showError(username, "Username is not valid")
    }
    else{
        showSuccess(username);
    }

    if (emailvalue === "") {
        showError(email, "Email can not be blank");
    }else if(!isEmailValid(emailvalue)){
        showError(email, "Email is not valid")
    }else{
        showSuccess(email)
    }

    if (password1value === "") {
        showError(password1, "Password can not be blank");
    }else{
        showSuccess(password1);
    }
    if (password2value === "") {
        showError(password2, "Password can not be blank");
    }else if(password2value!= password1value){
        showError(password2, "Passwords not matched");
    }else{
        showSuccess(password2)
    }

 }

 function showError(input, msg){
     const formControl = input.parentNode;
     formControl.className = "form-control error";
     const small = formControl.querySelector("small");
     small.innerHTML = msg;
 }

 function showSuccess(input){
     const formControl = input.parentNode;
     formControl.className = "form-control success";
     
 }

 function isEmailValid(emailvalue){
     return /([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(emailvalue)
 }
 function isUserNameValid(usernamevalue){
     return /(^[a-z]{1,}$)/.test(usernamevalue)
 }