export default function(array, className) {
    let menu = document.createElement('ul'),
        listItems = '';

    menu.className = className;

    array.forEach(item => {
       listItems += `<li>${item}</li>`;
    });

    menu.innerHTML = listItems;

    return menu;
};