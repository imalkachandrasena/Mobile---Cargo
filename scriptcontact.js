function sendMail(){
    let params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        subject: document.getElementById('subject').value ,
        message: document.getElementById('message').value
    };
    const serviceID = "service_8vw3eup";
const templateID = "template_sckkwk7";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
        console.log(res);
        alert("Thank you for your feedback! Your Message Send Successfully")
    }   
)
.catch(err => console.log(err));
}