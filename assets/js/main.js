// start navbar btn menu
const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.navbar__nav')


navbarBtn.addEventListener('click', function (e) {
  navbarNav.classList.toggle('active')
})
// end navbar btn menu

// Seleccionar navbar item para que al dar click se cierre todo

navbarNav.addEventListener('click', function (e) {
    if (e.target.closest('.navbar__item')) {
        navbarNav.classList.remove('active')
    }
})