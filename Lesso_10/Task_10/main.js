const array = [];


    for (let i = 0; i < 100; i++) {
    array.push({ id: i + 1, name: 'Okten'});
}
console.log(array);

let currentIndex = 0;
const itemPage = 10;

function displayObjects() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const start = currentIndex * itemPage;
    const end = start + itemPage;

    for (let i = start; i < end && i < array.length; i++) {
    const object = array[i];
    const containerArray = document.createElement('div');
    containerArray.innerText = `${object.id}. ${object.name}`;
        container.appendChild(containerArray);
    }
}

document.getElementById('previous').addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    displayObjects();
}
});

document.getElementById('next').addEventListener('click', () => {
    if ((currentIndex + 1) * itemPage < array.length) {
    currentIndex++;
    displayObjects();
}
});

displayObjects();



