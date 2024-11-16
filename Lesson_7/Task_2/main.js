function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10000000001'),
    new User(2, 'Serhii', 'Serhii', 'serhii@email.com', '+20000000002'),
    new User(3, 'Ivan', 'Ivan', 'ivan@email.com', '+30000000003'),
    new User(4, 'Dmytro', 'Dmytro', 'dmytro@email.com', '+40000000004'),
    new User(5, 'Inna', 'Inna', 'inna@email.com', '+50000000005'),
    new User(6, 'Mykhailo', 'Mykhailo', 'mykhailo@email.com', '+60000000006'),
    new User(7, 'Viktoria', 'Viktoria', 'viktoria@email.com', '+70000000007'),
    new User(8, 'Yuliia', 'Yuliia', 'yuliaa@email.com', '+80000000008'),
    new User(9, 'Valentyna', 'Valentyna', 'valentyna@email.com', '+90000000009'),
    new User(10, 'Charlotta', 'Charlotta', 'charlotta@email.com', '+1000000000010')
];


const filterIdEven = users.filter((user) => user.id % 2 === 0);
console.log(filterIdEven);