const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// My cats resource
const cats = [
    {id: 1, name: "Zelda", age: 3},
    {id: 2, name: "Tigerlily", age: 10},
    {id: 3, name: "Rumble", age: 12}
]

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!')
})

app.get('/cats', (req, res) => {
    res.send(cats)
})

app.get('/cats/:id', (req, res) => {
    try {
        const catId = parseInt(req.params.id) 
        const selectedCat = cats.find(c => c.id === catId)
        if(!selectedCat){
            throw new Error('That cat does not exist!')
        }
        res.send(selectedCat)
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

app.post('/cats', (req, res) => {
    const data = req.body
    const newCatId = cats.length + 1
    const newCat = {id: newCatId, ...data}
    cats.push(newCat)
    res.status(201).send(newCat)
})

app.delete('/cats/:id', (req, res) => {
     const catId = parseInt(req.params.id) 
     const catToDelete = cats.find(c => c.id === catId)
     cats.splice(cats.indexOf(catToDelete), 1);
     res.status(204).send()
})

module.exports = app