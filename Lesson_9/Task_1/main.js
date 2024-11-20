const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');


const block1 = document.createElement('div');
block1.classList.add('wrap');
const text = document.createElement('h1')
text.innerText = 'HTML / CSS';
block1.appendChild(text);
const cloneOfNode1 = block1.cloneNode(true);
cloneOfNode1.querySelector('h1').innerText = 'HTML / CSS - cloneNode1';
cloneOfNode1.classList.add('cloneNode1-background');
wrapperDiv.append(block1,cloneOfNode1);



const block2 = document.createElement('div');
block2.classList.add('collapse');
const text2 = document.createElement('h1');
text2.innerText = 'JavaScript';
block2.appendChild(text2);
const cloneOfNode2 = block2.cloneNode(true);
cloneOfNode2.querySelector('h1').innerText = 'JavaScript - cloneNode2';
cloneOfNode2.classList.add('cloneNode2-background');
wrapperDiv.append(block2, cloneOfNode2);



const block3 = document.createElement('div');
block3.classList.add('alpha');
const text3 = document.createElement('h1');
text3.innerText = 'React';
block3.appendChild(text3);
const cloneOfNode3 = block3.cloneNode(true);
cloneOfNode3.querySelector('h1').innerText = 'React - cloneNode3';
cloneOfNode3.classList.add('cloneNode3-background');
wrapperDiv.append(block3, cloneOfNode3);



const block4 = document.createElement('div');
block4.classList.add('beta');
const text4 = document.createElement('h1');
text4.innerText = 'Node.js';
block4.appendChild(text4);
const cloneOfNode4 = block4.cloneNode(true);
cloneOfNode4.querySelector('h1').innerText = 'Node.js - cloneNode4';
cloneOfNode4.classList.add('cloneNode4-background');
wrapperDiv.append(block4, cloneOfNode4);

document.body.appendChild(wrapperDiv);



console.log(cloneOfNode4);
console.log(block4);
console.log(block4.childNodes);
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('h1'));






