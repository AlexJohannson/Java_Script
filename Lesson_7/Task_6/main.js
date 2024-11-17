function Car(model, producer, yearOfProduction, maxSpeedOfCar, engineVolume, color, typeOfCar, gearbox) {
    this.model = model;
    this.produser = producer;
    this.yearOfProduction = yearOfProduction;
    this.maxSpeedOfCar = maxSpeedOfCar;
    this.engineVolume = engineVolume;
    this.color = color;
    this.typeOfCar = typeOfCar;
    this.gearbox = gearbox;
    this.drive = function () {
        console.log(`The maximum speed of the car is ${this.maxSpeedOfCar} kilometers`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedOfCar) {
        this.maxSpeedOfCar = this.maxSpeedOfCar + speedOfCar;
    };
    this.changeYear = function (year) {
        if (year >= 2000) this.yearOfProduction = year;
    };
    this.addDriver = function (driver) {
        if (driver) this.drive = driver;
    };
    this.motorTyp = function (motor) {
        switch (motor) {
            case 'bensin':
                console.log('Car tax 1000 UAH per year');
                break;
            case 'disel':
                console.log('Car tax 2000 UAH per year');
                break;
            case 'hybrid':
                console.log('Car tax 500 UAH per year');
                break;
            case 'electro':
                console.log('Car without tax 4 years');
                break;
        }
    };
}

 const car = new Car('Volvo', 'Volvo Sweden', 2020, 220, 2.2, 'Black', 'Sedan', 'DSG');
console.log(car);

car.drive();
/*car.info();*/
car.changeYear(2019);
car.increaseMaxSpeed(50);
car.addDriver({name: 'Name', surname: 'Surname'});
car.motorTyp('electro');
console.log(car);