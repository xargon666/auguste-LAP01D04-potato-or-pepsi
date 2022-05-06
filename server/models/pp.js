// const catsData = require('../data');

const ppsData = require('../data');

class Pp{
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
    static get all() {
        const pps = ppsData.map((pp) => new Pp(pp))
        return pps
    }

    // don't think I need this section...
    static findById(id) {
        try {
            // finds specific ID, instead of whole node, returns value with [0]
            const ppData = ppsData.filter((pp) => pp.id === id)[0]; 
            const pp = new Pp(ppData)
            return pp
        }
        catch (err) {
            throw new Error('That one is missing')
        }
    }

    static create(pp) {
        const newPpId = ppsData.length + 1
        const newPp = new Pp({id: newPpId, ...pp});
        ppsData.push(newPp);
        return newPp;
    }

    destroy(){
        const pp = ppsData.filter((findPp) = findPp.id === ppsData.id)[0];
        ppsData.splice(ppsData.indexOf(pp),1)
    }
}

module.exports = Pp;

// class Cat {
//     constructor(data) {
//         this.id = data.id;
//         this.name = data.name;
//         this.age = data.age;
//     }

//     static get all() {
//         const cats = catsData.map((cat) => new Cat(cat));
//         return cats;
//     }

//     static findById(id) {
//         try {
//             const catData = catsData.filter((cat) => cat.id === id)[0];
//             const cat = new Cat(catData);
//             return cat;
//         } catch (err) {
//             throw new Error('That cat does not exist!');
//         }
//     }

//     static create(cat) {
//         const newCatId = catsData.length + 1;
//         const newCat = new Cat({ id: newCatId, ...cat });
//         catsData.push(newCat);
//         return newCat;
//     }

//     destroy() {
//         const cat = catsData.filter((cat) => cat.id === this.id)[0];
//         catsData.splice(catsData.indexOf(cat), 1);
//     }
// }

// module.exports = Cat;
