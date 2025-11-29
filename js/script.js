const menuBurgerButton = document.querySelector('.header__menu-burger')
const navListElement = document.querySelector('.menu__list')

function openMenu() {
    navListElement.classList.toggle('header__nav--visible')
    menuBurgerButton.classList.toggle('header__menu-burger--active')
}

menuBurgerButton.addEventListener('click', openMenu)