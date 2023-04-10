//adding classes and removing function
const login_btn = document.querySelector("#loginbtn");
const signup_btn = document.querySelector("#signupbtn");
const container = document.querySelector(".container");
const buttonpart = document.querySelector(".buttonpart");

signup_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})

login_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})

signup_btn.addEventListener('click', () => {
    buttonpart.classList.add("color-change");
})
 
login_btn.addEventListener('click', () => {
    buttonpart.classList.remove("color-change");
})


//sending email to the new user
function sendMail1(){
    let params = {
        name: document.getElementById('Username').value ,
        email: document.getElementById('email').value ,
        password: document.getElementById('password').value,
    };
    localStorage.setItem('username',document.getElementById('Username').value)
    localStorage.setItem('password',document.getElementById('password').value)
    const serviceID = "service_8vw3eup";
    const templateID = "template_1utcjzd";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById('Username').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        console.log(res);
        alert("Thank you for joining with us. Please try to login.")
    }   
)
.catch(err => console.log(err));
}

//preventing form reloading function
function refreshStop(e){
    event.preventDefault();
}

//login form validation

function validation(){
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;

    let usernameSignup = localStorage.getItem('username');
    let passwordSignup = localStorage.getItem('password');

    if (name == usernameSignup && pass == passwordSignup){
        alert("Login Successfull! Welcome");
        document.getElementById('name').value = '';
        document.getElementById('pass').value = '';
        localStorage.removeItem('username')
        localStorage.removeItem('password')
    }
    else{
        alert("Wrong Username or Password!");
        document.getElementById('name').value = '';
        document.getElementById('pass').value = '';
    }
}



