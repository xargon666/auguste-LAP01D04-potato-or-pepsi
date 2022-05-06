const express = require('express');
const router = express.Router();

// const Cat = require('../models/cat');
const Pp = require('../models/pp')

router.get('/', (req, res) => {
    const ppsData = Pp.all;
    res.send(ppsData);
});

router.get('/:id', (req, res) => {
    try {
        const PpId = parseInt(req.params.id);
        const selectedPp = Pp.findById(PpId);
        res.send(selectedPp);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newPp = Pp.create(data);
    res.status(201).send(newPp);
});

router.delete('/:id', (req, res) => {
    const ppId = parseInt(req.params.id);
    const ppToDestroy = Pp.findById(ppId);
    ppToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;
