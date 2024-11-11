let users = [
    {
        id: 1,
        name: 'John',
        age: 23
    },
    {
        id: 2,
        name: 'Oleksandr',
        age: 30
    },
    {
        id: 3,
        name: 'Inna',
        age: 32
    },
    {
        id: 4,
        name: 'Viktoria',
        age: 25
    }
];

let arr = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`);
    }
}
arr(users);