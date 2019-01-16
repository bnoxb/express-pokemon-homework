const express = require('express');
const app     = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const pokemonController = require('./controller/pokemonController');

const port = 3000;


// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(morgan('short'));

app.use('/pokemon', pokemonController);

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});
