const express = require('express');
const app     = express();


const port = 3000;
// the array of pokemon
const Pokemon = require('./models/pokemon.js');

app.use(express.static('public'));

app.get('/pokemon', (req,res)=>{
    //res.send(Pokemon);
    res.render('index.ejs', {
        Pokemon: Pokemon,
    });
});

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})
