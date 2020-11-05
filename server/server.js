const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.json())

// My cats resource
const cats = [
    {id: 1, name: "Zelda", age: 3},
    {id: 2, name: "Tigerlily", age: 10},
    {id: 3, name: "Rumble", age: 12}
]

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

// Cats index route
server.get('/cats', (req, res) => res.send({cats}))

// Create cat route
server.post('/cats', (req, res) => {
    const catData = req.body;
    const newCat = {id: cats.length + 1, ...catData}
    cats.push(newCat);
    res.status(201).send(newCat)
})


module.exports = server