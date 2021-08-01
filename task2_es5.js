'use strict';

function Post_es5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post_es5.prototype.edit = function (text) {
    this.text = text;
}

let post1_es5 = new Post_es5('Mario', 'Its me, Mario!', new Date());

console.log(post1_es5);
post1_es5.edit('Wahoo!');
console.log(post1_es5);


function AttachedPost_es5(author, text, date) {
    Post_es5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost_es5.prototype = Object.create(Post_es5.prototype);
AttachedPost_es5.prototype.constructor = AttachedPost_es5;

AttachedPost_es5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let post2_es5 = new AttachedPost_es5('Luigi', 'Im a-Luigi, number one!', new Date());

console.log(post2_es5);
post2_es5.makeTextHighlighted();
post2_es5.edit('Lets-a go...');
console.log(post2_es5);