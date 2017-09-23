import createMenu from './menu';

let menu = createMenu(['Home', 'About', 'Contacts'], 'main-menu');

document.body.appendChild(menu);