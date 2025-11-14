function validate(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msgBox = document.getElementById("message");

    let message = '';

    if (email === ''){
        message = "Please enter your email";
        msgBox.style.color = 'red';
    }
    else if (password === ''){
        message = "Please enter your password";
        msgBox.style.color = "red";
    }
    else{
        message = "Login successful";
        msgBox.style.color = "green";
    }
    msgBox.innerText = message;
}
