/* display menu */
const overlay = document.getElementById('overlay')
const closeMenu = document.getElementById('close-menu')

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu')
})

document.getElementById('close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu')
})

/* .active  menu */
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('overlay')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))