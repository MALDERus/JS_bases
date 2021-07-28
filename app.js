'use strict';

//Задание 1

for (let num = 0; num <= 10; num++) {
    if (num == 0) {
        console.log(num + ' - это ноль');
    } else if (num % 2 == 0) {
        console.log(num + ' - четное число')
    } else {
        console.log(num + ' - нечетное число')
    }
}

//Задание 2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author)
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)

//Задание 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price *= 0.85
});

console.log(products)

//Задание 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//Часть 1

let newProducts = products.filter(function (product) {
    if ('photos' in product && product.photos.length > 0) {
        return product
    }
})

console.log(newProducts)

//Часть 2

products.sort(function (product1, product2) {
    if (product1.price < product2.price) {
        return -1;
    }
    if (product1.price > product2.price) {
        return 1;
    }
    return 0;
})

console.log(products)

//Задание 6

for (let index = 'x'; index.length <= 20; index += 'x') {
    console.log(index)
}