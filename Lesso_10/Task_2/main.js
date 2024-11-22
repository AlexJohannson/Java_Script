const accessAge = document.getElementById('accessAge');
const textAccess = document.getElementById('textAccess');
const checkAge = document.getElementById('checkAge');


accessAge.addEventListener('click', (event) => {
    event.preventDefault();
    const age = parseInt(checkAge.value);
    if (isNaN(age)) {
        textAccess.innerText = 'Please, enter your age';
    } else if (age < 18) {
        textAccess.innerText = 'You are under 18!';
    } else {
        textAccess.innerText = 'Access is open!';
    }
})
