import itemsTemplate from '../templates/menu-items.hbs'
import dishes from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markupMenu = itemsTemplate(dishes);

menuRef.insertAdjacentHTML('beforeend', markupMenu);
