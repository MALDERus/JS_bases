'use strict';

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let product1_es6 = new Product_es6('Tomato', 150);

product1_es6.make25PercentDiscount();
console.log(product1_es6);