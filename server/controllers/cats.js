const express = require('express');
const router = express.Router();

const Cat = require('../models/cat');

router.get('/', (req, res) => {
    const catsData = Cat.all;
    res.send(catsData);
});

router.get('/:id', (req, res) => {
    try {
        const catId = parseInt(req.params.id);
        const selectedCat = Cat.findById(catId);
        res.send(selectedCat);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newCat = Cat.create(data);
    res.status(201).send(newCat);
});

router.delete('/:id', (req, res) => {
    const catId = parseInt(req.params.id);
    const catToDestroy = Cat.findById(catId);
    catToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;
