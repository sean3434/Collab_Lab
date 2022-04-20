const express = require("express");
const app = express();
const methodOverride = require('method-override')
const PORT = 4000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))