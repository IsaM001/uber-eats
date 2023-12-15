"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  if (navbar) {
    var sticky = navbar.offsetTop;

    function handleScroll() {
      if (window.scrollY >= sticky) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    }

    window.addEventListener("scroll", handleScroll);
  } else {
    console.error("Element with ID 'navbar' not found.");
  }
});
