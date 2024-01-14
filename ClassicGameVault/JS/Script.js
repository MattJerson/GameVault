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
