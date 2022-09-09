const express = require("express");
// Import express-session
const session = require("express-session");
const sequelize = require("./config/connection");
const app = express();

const PORT = process.env.Port || 3000;

// Set up sessions
const sess = {
  secret: "travel secret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

const exphbs = require("express-handlebars");


const hbs = exphbs.create();

app.set("view engine", "handlebars");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Connect to the database before starting the Express.js server

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("homepage");
});

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
});
app.use(express.static("public")); 
