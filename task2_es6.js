'use strict';

class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

let post1_es6 = new Post_es6('Mario', 'Its me, Mario!', new Date());

console.log(post1_es6);
post1_es6.edit('Wahoo!');
console.log(post1_es6);


class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post2_es6 = new AttachedPost_es6('Luigi', 'Im a-Luigi, number one!', new Date());

console.log(post2_es6);
post2_es6.makeTextHighlighted();
post2_es6.edit('Lets-a go...');
console.log(post2_es6);