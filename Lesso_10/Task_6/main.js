const converter = document.getElementById('converter');
const feet = document.getElementsByTagName('h2')[0];

converter.oninput = function () {
    const kilograms = +converter.value;
    let result = kilograms * 2.2;
    feet.innerText = `${result} feet`;

}