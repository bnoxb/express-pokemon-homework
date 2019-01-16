const express = require('express');
const router = express.Router();
// the array of pokemon
const Pokemon = require('../models/pokemon.js');

// main pokemon list page at index.ejs
router.get('/', (req,res)=>{
    res.render('index.ejs', {
        Pokemon: Pokemon,
    });
});

router.get('/new', (req,res)=>{
    res.render('new.ejs');
})

router.post('/',(req,res)=>{
    Pokemon.push(req.body);
    res.redirect('/pokemon');
})
// show each pokemon by ID at show.ejs
router.get('/:id', (req,res)=>{
    res.render('show.ejs', {
        id: req.params.id,
        thisPokemon: Pokemon[req.params.id]
    })
});

router.get('/:id/edit',(req,res)=>{
    res.render('edit.ejs',{
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    })
})

router.put('/:id',(req,res)=>{
    Pokemon[req.params.id] = req.body;
    res.render('show.ejs',{
        id: req.params.id,
        thisPokemon: Pokemon[req.params.id]
    });
})

router.delete('/:id', (req, res)=>{
    Pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
})
module.exports = router;