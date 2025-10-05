const navbarLinks = document.querySelectorAll(".navbar-menu .nav-link");
const menuOpenButton = document.querySelector(".menu-open-button");
const menuCloseButton = document.querySelector(".menu-close-button");

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener('click', () => menuOpenButton.click())