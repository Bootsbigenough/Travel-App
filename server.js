const express = require("express");

const app = express();

const port = 3000;

const exphbs = require("express-handlebars");

app.set("view engine", "handlebars");

const hbs = exphbs.create();

app.engine(
  "handlebars",
  hbs.engine
  // engine({
  //   layoutsDir: __dirname + "/views/layouts",
  // })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.listen(port, () => console.log(`App listening to port ${port} `));
