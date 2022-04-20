//Variables
const express = require("express");
const app = express();
const methodOverride = require('method-override')
const PORT = 4000;
const videogames = require("./models/videogames.js")

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

// INDEX
app.get("/", (req, res) => {
    // res.send(videogames)
    res.render("index.ejs", { videogames: videogames });
  });

  //NEW
app.get('/new', (req, res) => {
  res.render('new.ejs');
  });
// SHOW
app.get("/game/:id", (req, res) => {
    id = req.params.id
    res.render("show.ejs", { videogames: videogames[id] });
  });





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))