/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/


class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{

    constructor(name, age, louboutin) {
        this.name = name;
        this.age = age;
        this.louboutin = louboutin;
    }
}

const cinderellas = [
    new Cinderella('Viktoria', 28, 30),
    new Cinderella('Olivia', 27, 28),
    new Cinderella('Yuliia', 30, 32),
    new Cinderella('Olha', 33, 34),
    new Cinderella('Inna', 34, 36),
    new Cinderella('Svitlana', 29, 31),
    new Cinderella('Emilia', 35, 37),
    new Cinderella('Iryna', 35, 38),
    new Cinderella('Yana', 39, 40),
    new Cinderella('Olena', 41, 43),
];



const prince = new Prince('Oleh', 32, 32);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.louboutin) {
        console.log(`Prince wife is ${cinderella.name}`);
    }
}




const find = cinderellas.find(cinderella => cinderella.footSize === prince.louboutin);
prince.wife = find;
console.log(prince.wife);

