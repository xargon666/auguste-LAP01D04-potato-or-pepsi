const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const ppRoutes = require('./controllers/pp');
app.use('/pp', ppRoutes);

app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

module.exports = app;
