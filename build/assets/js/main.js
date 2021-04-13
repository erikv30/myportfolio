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