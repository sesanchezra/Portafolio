// start navbar btn menu
const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.navbar__nav')

navbarBtn.addEventListener('click', function (e) {
  console.log(navbarNav)
  navbarNav.classList.toggle('active')
})
// end navbar btn menu

// Seleccionar navbar item para que al dar click se cierre todo

// const navbarItem= document.querySelector('.navbar__item')
// console.log(navbarItem);