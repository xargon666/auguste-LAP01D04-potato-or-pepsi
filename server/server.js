const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const catRoutes = require('./controllers/cats');
app.use('/cats', catRoutes);

app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

module.exports = app;
