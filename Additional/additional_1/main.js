let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let userWithCities = new Array(usersWithId.length);
for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    let city;

    for (let j = 0; j < citiesWithId.length; j++) {
        if (citiesWithId[j].user_id === user.id) {
            city = citiesWithId[j];
            break;
        }
    }
    userWithCities[i] = {user, address: city};
}
console.log(userWithCities);