const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// add route
const route = require('./routes');

const db = require('./config/db');

// Connect to db
db.connect();

// Stactic file
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// HTPP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b, ///dùng helper trong tplengine, dùng trong file stored-courses.hbs
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// use route
route(app);
