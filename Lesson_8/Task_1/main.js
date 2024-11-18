function Client1(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.nameClient = function () {
        return this.name;
    }
}

let clients1 = [
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Volodymyr', 'Volodymyr', 'volodymyr@email.com', '+467388329'),
    new Client1(1, 'Viktoria', 'Viktoria', 'viktoria@email.com', '+3620387732'),
    new Client1(1, 'Inna', 'Inna', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Olha', 'Olha', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Dmytro', 'Dmytro', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Mykhailo', 'Mykhailo', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Serhii', 'Serhii', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Iryna', 'Iryna', 'oleksandr@email.com', '+10101010'),
    new Client1(1, 'Denys', 'Denys', 'oleksandr@email.com', '+10101010'),
];

console.log(clients1);


function clone(client1) {
    if (client1) {
        let functions = [];
        for (let i = 0; i < client1.length; i++) {
            let client = client1[i];
            for (const key in client) {
                if (typeof client[key] === 'function') {
                    functions.push({ key, functionClone: client[key], index: i });
                }
            }
        }
        const clonedClients = JSON.parse(JSON.stringify(client1));

        for (const { key, functionClone, index } of functions) {
            clonedClients[index][key] = functionClone;
        }
        return clonedClients;
    }
    throw new Error('!!!');
}

clonedClients = clone(clients1);
console.log(clonedClients);
console.log(clonedClients[3].nameClient());

