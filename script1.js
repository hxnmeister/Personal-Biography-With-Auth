const form = document.forms.signup;
const email = form.elements.useremail;
const password = form.elements.userpassword;
const repeatpass = form.elements.passrepeat;

const emailerror = document.getElementById("emailerror");
const passworderror = document.getElementById("passworderror");
const repeatpasserror = document.getElementById("repeaterror");

const checkEmailExpression = /^[a-zA-Z0-9_.-]{3,}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const checkPasswordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const SignUpPressed = (event) =>
{
    event.preventDefault();

    if(email.value.match(checkEmailExpression))
    {
        if(!emailerror.hidden) emailerror.hidden = true;

        if(password.value.match(checkPasswordExpression))
        {
            if(!passworderror.hidden) passworderror.hidden = true;

            if(password.value === repeatpass.value)
            {
                if(!repeatpasserror.hidden) repeatpasserror.hidden = true;

                window.location.replace("/index2.html");
                alert("+");
            }
            else
            {
                repeatpasserror.hidden = false;
            }
        }
        else
        {
            passworderror.hidden = false;
        }
    }
    else
    {
        emailerror.hidden = false;
    }


}

form.addEventListener("submit", SignUpPressed);