const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

// My cats resource
const cats = [
    {name: "Zelda", age: 3},
    {name: "Tigerlily", age: 10},
    {name: "Rumble", age: 12}
]

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

// Cats index route
server.get('/cats', (req, res) => res.send(JSON.stringify({ cats })))

// Create cat route
server.post('/cats', (req, res) => {
    const newCat = JSON.parse(req.body);
    cats.push(newCat);
    res.send(JSON.stringify(newCat))
})

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))