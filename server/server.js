const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cats = require('./data');
const Cat = require('./models/cat');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

app.get('/cats', (req, res) => {
    const catsData = Cat.all;
    res.send(catsData);
});

app.get('/cats/:id', (req, res) => {
    try {
        const catId = parseInt(req.params.id);
        const selectedCat = Cat.findById(catId);
        if (!selectedCat) {
            throw new Error('That cat does not exist!');
        }
        res.send(selectedCat);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

app.post('/cats', (req, res) => {
    const data = req.body;
    const newCatId = cats.length + 1;
    const newCat = Cat.create(newCatId, data.name, data.age);
    cats.push(newCat);
    res.status(201).send(newCat);
});

app.delete('/cats/:id', (req, res) => {
    const catId = parseInt(req.params.id);
    const catToDestroy = Cat.findById(catId);
    catToDestroy.destroy();
    res.status(204).send();
});

module.exports = app;
