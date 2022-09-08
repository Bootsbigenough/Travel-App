const express = require("express");

const app = express();

const port = 3000;

const exphbs = require("express-handlebars");


const hbs = exphbs.create();

app.use(express.static("public"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.listen(port, () => console.log(`App listening to port ${port} `));
