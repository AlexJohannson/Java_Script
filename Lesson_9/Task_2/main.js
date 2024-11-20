const array = ['Main', 'Products', 'About us', 'Contacts'];

const header = document.createElement('div');
header.classList.add('header');

const menuHeader = document.createElement('ul');
menuHeader.classList.add('menuHeader');

for (const item of array) {
    const menuNavigator = document.createElement('li');
    menuNavigator.classList.add('menuNavigator');
    menuNavigator.innerText = item;
    menuHeader.appendChild(menuNavigator);
}

header.appendChild(menuHeader);
document.body.appendChild(header);