let username = document.getElementById("userNameOrEmail");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");

const getUsername = localStorage.getItem("Username")
const getEmail = localStorage.getItem("Email")
const getPassword = localStorage.getItem("Password")

const inputNames = document.querySelectorAll(".inputName");
const inputFields = document.querySelectorAll(".inputContainer input");

inputFields.forEach((inputField, index) => {
    inputField.addEventListener("focus", () => {
        inputNames[index].classList.add("inputNameActive");
    });

    inputField.addEventListener("blur", () => {
        if (inputField.value.trim() === "") {
            inputNames[index].classList.remove("inputNameActive");
        }
    });
});


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let usernameValue = username.value.toLowerCase();

    if (usernameValue === getUsername.toLowerCase() || usernameValue === getEmail.toLowerCase()) {
        if (password.value === getPassword) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1000)
        }else {
            alert("Username or Password is incorrect")
        }
    }
})

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
