// Sticky header on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu function
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".nav");
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

// Animate elements on scroll
window.addEventListener("scroll", function () {
  var animeElements = document.querySelectorAll(".animeX");
  var windowheight = window.innerHeight;
  var animepoint = 150;

  animeElements.forEach(function (anime) {
    var animetop = anime.getBoundingClientRect().top;
    if (animetop < windowheight - animepoint) {
      anime.classList.add("active");
    } else {
      anime.classList.remove("active");
    }
  });
});

function sendMessage() {
  // Get form values
  var name = document.getElementById("name").value;
  var userEmail = document.getElementById("user_email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Simple form validation
  if (!name || !userEmail || !subject || !message) {
    alert("Please fill out all the fields before sending the message.");
    return;
  }

  // Prepare parameters for EmailJS
  var params = {
    from_name: name,
    user_name: name,
    user_email: userEmail,
    subject_id: subject,
    message: message,
  };

  // Send email using EmailJS
  emailjs
    .send("service_wqn5m7c", "template_2tjik8i", params)
    .then(function (response) {
      alert("Message Sent Successfully!");
    })
    .catch(function (error) {
      console.error("Email sending failed", error);
      alert("Email sending failed. Please try again later.");
    });
}
