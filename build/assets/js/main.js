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

/*scroll reveal*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SR home */
sr.reveal('.home-title', {})
sr.reveal('.home-img', {delay:200})
sr.reveal('.home-social-icon', {interval:200})

/* SR about */
sr.reveal('.about-text', {})
sr.reveal('.about-img', {delay:300})

/* SR skills */
sr.reveal('.skill', {interval:200})

/* SR projects */
sr.reveal('.project-img', {interval:200})

/* SR contact */
sr.reveal('.contact-item', {interval:200})

