/* Navbar start */
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')

document.getElementById('menu-btn').addEventListener('click', function() {
    nav.classList.toggle('nav-active')
})

function onLinkClick() {
   nav.classList.toggle('nav-active')
}

navLinks.forEach(n => n.addEventListener('click', onLinkClick))
/* Navbar ends */

/* Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
