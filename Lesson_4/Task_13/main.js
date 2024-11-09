function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let choseCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
    }
    return sumUAH / choseCurrency.value;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));