const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

//Prevent users from accessing the home page if they are not logged in
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["username", "ASC"]],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render("homepage", {
      users,
      //Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      pass: req.body.pass,
    });
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.logged_in = true;
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  //If session exists, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
  }

  res.render("login");
});

module.exports = router;
