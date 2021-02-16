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
        return cats;
    }

    static findById(id) {
        const catData = data.filter((cat) => cat.id === id)[0];
        const cat = new Cat(catData.id, catData.name, catData.age);
        return cat;
    }

    static create(name, age) {
        const catsData = data;
        const newCatId = catsData.length + 1;
        const newCat = new Cat(newCatId, name, age);
        catsData.push(newCat);
        return newCat;
    }

    destroy() {
        const catsData = data;
        const cat = catsData.filter((cat) => cat.id === this.id)[0];
        catsData.splice(catsData.indexOf(cat), 1);
    }
}

module.exports = Cat;
