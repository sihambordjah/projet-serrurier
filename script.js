const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mess.value}<br>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sihamsissa1903@gmail.com",
    Password: "EB0FE8E1714FEC2341EF657F088BDFD67D28",
    To: "sihamsissa1903@gmail.com",
    From: "sihamsissa1903@gmail.com",
    Subject: "This is the subject",
    Body: bodyMessage,
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
/**animation de formulaire */
window.addEventListener("DOMContentLoaded", (event) => {
  inputs = document.querySelectorAll(
    'input:not(input[type="submit"]), textarea'
  );

  inputs.forEach((e) => {
    e.addEventListener("click", function () {
      inputs.forEach((e) => {
        e.style.borderBottom = "2px solid #f9ad4a";
      });
      e.style.borderBottom = "2px solid black";
    });
  });
});
