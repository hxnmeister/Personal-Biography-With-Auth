const repeatPassError = document.getElementById("passrepeat");
const passwordError = document.getElementById("upassword");
const emailError = document.getElementById("umail");
const form = document.forms.signup;

const email = form.elements.useremail;
const password = form.elements.userpassword;
const repeatpass = form.elements.passrepeat;

const checkEmailExpression = /^[a-zA-Z0-9_.-]{3,}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const checkPasswordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const currentDate = new Date(Date.now() + 3600000);
const expirationDate = new Date(currentDate.setUTCMinutes(currentDate.getUTCMinutes() - currentDate.getTimezoneOffset())).toUTCString();

// const deleteCookie = (cookieName) =>  document.cookie = cookieName + "=; max-age=-1;";
// deleteCookie("email");

const signUpPressed = (event) =>
{
    event.preventDefault();

    const isValidEmail = email.value.match(checkEmailExpression);
    const isValidPassword = password.value.match(checkPasswordExpression);
    const isPasswordMatch = password.value === repeatpass.value;

    !isValidEmail ? emailError.classList.add("emailerror") : emailError.classList.remove("emailerror");
    !isValidPassword ? passwordError.classList.add("passworderror") : passwordError.classList.remove("passworderror");
    !isPasswordMatch ? repeatPassError.classList.add("repeaterror") : repeatPassError.classList.remove("repeaterror");

    if(isValidEmail && isValidPassword && isPasswordMatch)
    {
        document.cookie = `email=${email.value}; expires=${expirationDate}; path=/`;
        window.location.replace("/index2.html");
    }

}
const checkCookie = () => { if(document.cookie) window.location.replace("/index2.html"); }

form.addEventListener("submit", signUpPressed);
window.addEventListener("load", checkCookie);