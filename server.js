require('./models/database');

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const expressHandlebars = require("express-handlebars");
const bodyparser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const studentMentor = require('./mentors/studentMentor');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', expressHandlebars({ extname: 'hbs',
  defaultLayout: 'mainLayout',
  handlebars: allowInsecurePrototypeAccess(handlebars),
  layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Server is running');
});

app.use('/student', studentMentor);