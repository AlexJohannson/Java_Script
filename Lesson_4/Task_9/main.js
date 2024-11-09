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
]
arr(users);

function arr(users) {
    for (const user of users) {
      document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`)
    }
}
document.write(`<hr>`);
/*-----------------------------------------------------------------------------------*/


function usersArray(users) {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`)

    }
}


usersArray([
    {
        id: 1,
        name: 'Vitalii',
        age: 12
    },
    {
        id: 2,
        name: 'Dmytro',
        age: 45
    },
    {
        id: 3,
        name: 'Olena',
        age: 54
    },
    {
        id: 4,
        name: 'Dariia',
        age: 34
    }
]);