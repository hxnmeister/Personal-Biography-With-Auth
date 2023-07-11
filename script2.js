const firtNameError = document.getElementById("fname");
const lastNameError = document.getElementById("lname");
const birthYearError = document.getElementById("byear");
const phoneNumberError = document.getElementById("pnumber");
const skypeError = document.getElementById("slogin");
const currentUserInfo = document.getElementById("currentuserinfo");
const endSessionButton = document.getElementById("endsessionbutton");
const form = document.forms.biography;

const gender = form.elements.gender;
const lastName = form.elements.lastname;
const firstName = form.elements.firstname;
const birthYear = form.elements.birthyear;
const skypeLogin = form.elements.skype;
const phoneNumber = form.elements.phone;

const checkNameExpression = /^[a-zA-Z]{1,20}$/;
const checkPhoneExpression = /^[\d()\s-]{10,12}$/;
const checkSkypeExpression = /^[a-zA-Z\d-\.]+$/;

const deleteCookie = (cookieName) =>  document.cookie = cookieName + "=; max-age=-1;";
const getCookie = (cookieName) => 
{
    let matches = document.cookie.match(new RegExp("(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const showCurrentUser = () =>
{
    const user = getCookie("email");

    currentUserInfo.innerHTML = `Hello, ${user !== undefined ? user : window.location.replace("/index1.html")}!`;
}
const endSession = (event) =>
{
    event.preventDefault();

    window.location.replace("/index1.html");
    deleteCookie("email");
}

window.addEventListener("load", showCurrentUser);
endSessionButton.addEventListener("click", endSession);