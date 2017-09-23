import createMenu from './parts/menu';

let menu = createMenu(['Home', 'About', 'Contacts'], 'main-menu');

document.body.appendChild(menu);