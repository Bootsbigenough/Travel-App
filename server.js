
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


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

app.set("view engine", "handlebars");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Connect to the database before starting the Express.js server

app.use(express.static("public"));

app.use(routes);

// app.get("/", (req, res) => {
//   return res.render("homepage");
// });

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
});
app.use(express.static("public"));
