const btnEl = document.getElementById('btn-menu');
const navigationEl = document.getElementsByClassName('navigation');
const navigationMenuEl = document.getElementsByClassName('navigation__menu');

const toggleMenu = () => {
    navigationEl[0].classList.toggle('active');
    navigationMenuEl[0].classList.toggle('active');
    btnEl.firstChild.nextSibling.classList.toggle('active');
}

btnEl.addEventListener('click',toggleMenu);
