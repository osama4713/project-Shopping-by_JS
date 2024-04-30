let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let submitBtn = document.getElementById('submitBtn');


function checkEmail(email) {
    const emailChrs = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailChrs.test(email);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let firstNameValue = firstName.value
    let lastNameValue = lastName.value
    let usernameValue = username.value.toLowerCase()
    let emailValue = email.value.toLowerCase()
    let passwordValue = password.value
    let confirmPasswordValue = confirmPassword.value

    if (firstNameValue === "" || lastNameValue === "" || usernameValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
        alert("Complete the Rest of the Information")
    }
    else if (firstNameValue.length < 3) {
        alert("The First name Must be more than 2 letters")
    }
    else if (lastNameValue.length < 3) {
        alert("The Last name Must be more than 2 letters")
    }
    else if (usernameValue.length < 4) {
        alert("The Username Must be more than 3 letters")
    }
    else if (passwordValue.length < 5) {
        alert("The Password Must be more than 6 letters")
    }
    else if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match")
    }
    else {
        localStorage.setItem("FirstName" , firstNameValue);
        localStorage.setItem("LastName" , lastNameValue);
        localStorage.setItem("Username" , usernameValue);
        localStorage.setItem("Password" , passwordValue);

        if (checkEmail(emailValue) === true) {
            localStorage.setItem('Email', email.value);
        } else {
            alert("Please enter a valid Email")
        }

        setTimeout(() => {
            window.location = "signin.html"
        },1000)
    }
    
});

//   PassWord Showing  

function showPassWord() {
    let password = document.getElementById("password")
    let passwordEye = document.querySelector(".passwordEye")

    if (password.type === "password") {
        password.type = "text"
        passwordEye.innerHTML = `<i class="fa-solid fa-eye-slash"></i> `
    } else {
        password.type = "password"
        passwordEye.innerHTML = `<i class="fa-solid fa-eye"></i> `
    }
}

function showConfirmPassWord() {
    let password = document.getElementById("confirmPassword")
    let passwordEye = document.querySelector(".confirmPasswordEye")

    if (password.type === "password") {
        password.type = "text"
        passwordEye.innerHTML = `<i class="fa-solid fa-eye-slash"></i> `
    } else {
        password.type = "password"
        passwordEye.innerHTML = `<i class="fa-solid fa-eye"></i> `
    }

}