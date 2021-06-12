
import foodServiceTemplate from './card.hbs';
import foodCard from './menu.json';
import './sass/main.scss';
const menuGalleryEll = document.querySelector('ul.js-menu');

const cardsMarkup = foodServiceTemplate(foodCard);

menuGalleryEll.insertAdjacentHTML('beforeend', cardsMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

toggle.addEventListener('change', onChangeTheme);

currentTheme();
body.classList.add(Theme.LIGHT);

function onChangeTheme() {
    if (toggle.checked === true) {
         body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem('siteTheme', true);
    } else {
         body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('siteTheme', false);
    }
}

function currentTheme() {
    const themeStorage = localStorage.getItem('siteTheme');
    if (themeStorage) {
        if (themeStorage === 'true') {
            body.classList.add(Theme.DARK);
            toggle.checked = true;
        }
    }
}


