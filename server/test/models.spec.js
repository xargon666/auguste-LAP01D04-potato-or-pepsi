// import data
const catsData = require('../data');
// import model
const Cat = require('../models/cat');

describe('Cat model', () => {
    const testCat = {
        name: 'Albus',
        age: 5,
    };

    it('should make an instance of a cat', () => {
        const cat = new Cat({ id: 10, ...testCat });

        expect(cat.id).toBe(10);
        expect(cat.name).toBe('Albus');
        expect(cat.age).toBe(5);
    });

    it('should return all cats', () => {
        const cats = Cat.all;

        expect(cats).toEqual(catsData);
    });

    it('should return a cat', () => {
        const cat = Cat.findById(1);

        expect(cat).toEqual(catsData[0]);
    });

    it('should throw an error if no cat', () => {
        function testError() {
            Cat.findById(50);
        }

        expect(testError).toThrowError('That cat does not exist!');
    });

    it('should create a cat', () => {
        const newCatId = catsData.length + 1;
        const newCat = Cat.create(testCat);

        expect(newCat).toEqual({ id: newCatId, ...testCat });
    });

    it('should delete a cat', () => {
        const catToDestroyId = catsData.length;
        const catToDestroy = catsData[catToDestroyId - 1];
        catToDestroy.destroy();

        expect(catToDestroy).toEqual({ id: catToDestroyId, ...testCat });
        expect(catsData).not.toContain(catToDestroy);
    });
});
