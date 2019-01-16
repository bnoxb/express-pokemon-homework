const express = require('express');
const app     = express();
const morgan = require('morgan')

const port = 3000;
// the array of pokemon
const Pokemon = require('./models/pokemon.js');

// middleware
app.use(express.static('public'));
app.use(morgan('short'));

// main pokemon list page at index.ejs
app.get('/pokemon', (req,res)=>{
    //res.send(Pokemon);
    res.render('index.ejs', {
        Pokemon: Pokemon,
    });
});

// show each pokemon by ID at show.ejs
app.get('/pokemon/:id', (req,res)=>{
    console.log(req.params.id);
    //res.send('You are on the pokemon by id page');
    res.render('show.ejs', {
        Pokemon: Pokemon,
        thisPokemon: Pokemon[req.params.id]
    })
});

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});
