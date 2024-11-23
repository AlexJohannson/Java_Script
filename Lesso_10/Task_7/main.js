let arrayUsers = [
    {
        name: 'Oleksandr',
        age: 31,
    },
    {
        name: 'Inna',
        age: 28
    },
    {
        name: 'Viktoria',
        age: 25
    },
    {
        name: 'Yuliia',
        age:36
    },
    {
        name: 'Dmytro',
        age: 37
    }
];

localStorage.setItem('users', JSON.stringify(arrayUsers));

function addToLocalStorage(users, objectToAdd) {
      const array = JSON.parse(localStorage.getItem('users')) || [];
    if (typeof objectToAdd === 'object') {
        array.push(objectToAdd);
    }
    localStorage.setItem('users', JSON.stringify(array));
}
addToLocalStorage('users', {name: 'Mykola', age: 21});