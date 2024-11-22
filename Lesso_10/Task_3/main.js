const form  = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputAge = document.getElementById('inputAge');
const nameObject = document.getElementById('nameObject');
const nameObjectTitle = document.getElementsByTagName('h1')[0];




form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = inputName.value;
    const surnameValue = inputSurname.value;
    const ageValue = +inputAge.value;
    let personObject = {nameValue, surnameValue, ageValue};
    console.log(personObject);
    nameObjectTitle.innerText = `${personObject.nameValue} ${personObject.surnameValue} ${personObject.ageValue}`;
    if (nameObjectTitle){
        nameObject.style.background = 'lightgray';
    }

})