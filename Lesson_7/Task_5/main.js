function Client1(id, name, surname, email, phone, products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.products = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients1 = [
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product( 'TV', '12000 UAH'), new Product('Phone', '10000 UAH'), new Product('Phone', '10000 UAH'), new Product('Phone', '10000 UAH'), new Product('Phone', '10000 UAH')]),
    new Client1(1, 'Volodymyr', 'Volodymyr', 'volodymyr@email.com', '+467388329', [new Product('Hair dryer', '1200 UAH'), new Product('TV', '13000 UAH'), new Product('TV', '15000 UAH')]),
    new Client1(1, 'Viktoria', 'Viktoria', 'viktoria@email.com', '+3620387732', [new Product('Refrigerator', '15000 UAH'), new Product('Toaster', '1000 UAH'), new Product('TV', '15000 UAH'), new Product('TV', '15000 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Phone', '23000 UAH'), new Product('Kettle', '250 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Microwave oven', '3000 UAH'), new Product('Bicycle', '25000 UAH'), new Product('Phone', '10000 UAH'), new Product('Phone', '10000 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Toaster', '2200 UAH'), new Product('Phone', '24000 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Phone', '12000 UAH'), new Product('TV', '15000 UAH'), new Product('TV', '15000 UAH'), new Product('TV', '15000 UAH'), new Product('TV', '15000 UAH'), new Product('TV', '15000 UAH'), new Product('TV', '15000 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Hair dryer', '1200 UAH'), new Product('Kettle', '300 UAH'), new Product('Phone', '10000 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Refrigerator', '12000 UAH')]),
    new Client1(1, 'Oleksandr', 'Oleksandr', 'oleksandr@email.com', '+10101010', [new Product('Bicycle', '12000 UAH'), new Product('Phone', '32000 UAH')]),
];
const sortProducts = clients1.sort((a, b) => a.products.length - b.products.length);
console.log(sortProducts);
