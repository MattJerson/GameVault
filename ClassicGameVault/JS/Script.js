window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".nav");
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  var anime = document.querySelectorAll(".animeX");
  for (var s = 0; s < anime.length; s++) {
    var windowheight = window.innerHeight;
    var animetop = anime[s].getBoundingClientRect().top;
    var animepoint = 150;
    if (animetop < windowheight - animepoint) {
      anime[s].classList.add("active");
    } else {
      anime[s].classList.remove("active");
    }
  }
});
