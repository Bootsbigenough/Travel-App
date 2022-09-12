const express = require("express");
<<<<<<< Updated upstream
// Import express-session
const session = require("express-session");
const sequalize = require("./config/connection");
const app = express();
=======
const session = require("express-session");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
>>>>>>> Stashed changes

const app = express();
const PORT = process.env.PORT || 3000;

// Set up sessions
const sess = {
  secret: "travel secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));

const exphbs = require("express-handlebars");


const hbs = exphbs.create();

// Connect to the database before starting the Express.js server
sequalize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listwening'));

app.use(express.static("public"));

app.use(routes);

// app.get("/", (req, res) => {
//   return res.render("homepage");
// });

// Connect to the database before starting the Express.js server
sequalize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
});
app.use(express.static("public")); 
