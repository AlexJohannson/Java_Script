let names = [];
names [0] = 'Apple';
names [1] = 'Banana';
names [2] = 'Tomato';

let prices = [];
prices [0] = 310.45;
prices [1] = 45;
prices [2] = 14.10;

let orderedProducts = promptOrderetProducts();
let totalPrice = calculateTotalPrice(orderedProducts);
showOrderedDetails(totalPrice);

function promptOrderetProducts() {
    let products = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const price = prices[i];
        products[i] = +prompt(`${name}, ${price}`);
    }
    return products;
}

function calculateTotalPrice(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += prices[i] * products[i];
    }
    return sum;
}

function showOrderedDetails(orderTotalPrice) {
    alert(`${orderTotalPrice}`);
    let isFreeDelivery = orderTotalPrice > 1000;
    if (isFreeDelivery) {
        alert('Free Delivery');
    }
}