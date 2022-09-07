const express = require("express");
// Import express-session
const session = require('express-session');
const sequalize = require('./config/connection');
const app = express();

const PORT = process.env.Port || 3000;

// Set up sessions
const sess = {
  secret: 'travel secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

const exphbs = require("express-handlebars");


const hbs = exphbs.create();

// Connect to the database before starting the Express.js server
sequalize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listwening'));

app.use(express.static("public"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.listen(port, () => console.log(`App listening to port ${port} `));
