





function verifyPassword(){
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    if(password.value !== confirmPassword.value){
        let passwordWrong = document.querySelector(".passwordWrong");
        let text = document.createTextNode("* Passwords do not match");
        passwordWrong.appendChild(text);
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        
        return false;
    }
    else{
        return true;
    }
    
}