// scroll blur effect
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let nav = document.querySelector("nav");
  nav.classList.toggle("blur", scroll > 0);
});
// hamburger menu
function hamburger() {
  let nav = document.querySelector("nav");
  let ul = document.querySelector("ul");
  let auth = document.querySelectorAll(".auth a");
  let hamburger = document.querySelector(".hamburger");
  if (nav.classList.toggle("active")) {
    nav.style.height = "100vh";
    ul.style.display = "block";
    auth.forEach((auth) => {
      auth.style.display = "block";
    });
  } else {
    nav.style.height = "100%";
    ul.style.display = "none";
    auth.forEach((auth) => {
      auth.style.display = "none";
    });
  }
}

// slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
