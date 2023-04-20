const headerNav = document.querySelector('.header-nav')
const menuMobile = document.querySelector('.menu-mobile')
const backShadow = document.querySelector('.backshadow')

function activateMenu(){
    menuMobile.classList.toggle('active')
    headerNav.classList.toggle('active')
    backShadow.classList.toggle('active')
}

menuMobile.addEventListener('click', activateMenu)