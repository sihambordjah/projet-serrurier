/*
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mess.value}<br>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "contact@depannage-serrurier-saintdenis.fr",
    Password: "EB0FE8E1714FEC2341EF657F088BDFD67D28",
    To: "contact@depannage-serrurier-saintdenis.fr",
    From: "contact@depannage-serrurier-saintdenis.fr",
    Subject: "This is the subject",
    Body: bodyMessage,
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
/**animation de formulaire *//*
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

function openNav() {
  document.querySelector(".links").style.width = "100%";
  document.querySelector("body").style.overflow = "hidden";
}
function closeNav() {
  document.querySelector(".links").style.width = "0%";
  document.querySelector("body").style.overflow = "unset";
}*/

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // empêche le rechargement de la page

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        document.getElementById("confirmation").style.display = "block";
        form.reset(); // vide le formulaire
      })
      .catch((error) => alert("❌ Une erreur est survenue : " + error));
  });

