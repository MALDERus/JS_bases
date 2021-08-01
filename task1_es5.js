'use strict';

function Product_es5(name, price) {
    this.name = name;
    this.price = price;
}

Product_es5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
};

let product1_es5 = new Product_es5('Tomato', 150);

product1_es5.make25PercentDiscount();
console.log(product1_es5);