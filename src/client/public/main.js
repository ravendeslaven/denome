const navToggle = document.querySelector(".navMenu");
const navMenu = document.querySelector("nav")

// Open Menu
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle('x-close-button')
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Close Menu");
  } else {
    navToggle.setAttribute("aria-label", "Open Menu");
  }
});


// Close menu



// Dark Mode
const moon = document.querySelector('.moon')
moon.addEventListener('click', () => {
    alert('Dark mode on')
})
