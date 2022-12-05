const bar = document.querySelector('.nav__bar');
const navMenu = document.querySelector('.nav__list');

bar.addEventListener('click', mobileMenu);

function mobileMenu() {
    bar.classList.toggle('active');
    navMenu.classList.toggle('active');
    cart.classList.remove('active')
}

const navLink = document.querySelectorAll('.nav__list__item__link');
const cartButton = document.querySelector('.header-content__btn');

cartButton.addEventListener('click', closeMenu);

navLink.forEach(e => e.addEventListener('click', closeMenu));

function closeMenu() {
    bar.classList.remove('active');
    navMenu.classList.remove('active');
};

