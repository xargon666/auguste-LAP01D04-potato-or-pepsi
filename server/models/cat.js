const cats = require('../data');

class Cat {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    static get all() {
        const catData = cats;
        return catData;
    }
}

module.exports = Cat;
