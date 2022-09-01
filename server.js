const express = require("express");

const app = express();

const port = 3000;

const { engine } = require("express-handlebars");

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.listen(port, () => console.log(`App listening to port ${port} `));

