const data = require('../data');

class Cat {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    static get all() {
        const catsData = data;
        const cats = catsData.map((cat) => new Cat(cat.id, cat.name, cat.age));
        return catsData;
    }

    static findById(id) {
        const catData = data.filter((cat) => cat.id === id)[0];
        const cat = new Cat(catData.id, catData.name, catData.age);
        return cat;
    }
}

module.exports = Cat;
