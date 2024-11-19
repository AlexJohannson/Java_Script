const block1 = document.createElement('div');
block1.classList.add('wrap');
let text = document.createElement('h1')
text.innerText = 'HTML / CSS';
block1.appendChild(text);
const cloneOfNode1 = block1.cloneNode(true);
document.body.append(cloneOfNode1);

const block2 = document.createElement('div');
block2.classList.add('collapse');
let text2 = document.createElement('h1');
text2.innerText = 'JavaScript';
block2.appendChild(text2);
const cloneOfNode2 = block2.cloneNode(true);
document.body.append(cloneOfNode2);

const block3 = document.createElement('div');
block3.classList.add('alpha');
let text3 = document.createElement('h1');
text3.innerText = 'React';
block3.appendChild(text3);
const cloneOfNode3 = block3.cloneNode(true);
document.body.append(cloneOfNode3);

const block4 = document.createElement('div');
block4.classList.add('beta');
let text4 = document.createElement('h1');
text4.innerText = 'Node.js';
block4.appendChild(text4);
const cloneOfNode4 = block4.cloneNode(true);
document.body.append(cloneOfNode4);






