const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  console.log("----");
  const loggedIn = req.session.logged_in;
  const userId = req.session.user_id;
  console.log("test", userId);
  const findUser = await User.findByPk(userId, { raw: true });
  console.log("testing", findUser);

  if (loggedIn) {
    res.render("user", {
      user: findUser,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } else {
    res.render("homepage", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  }
});

module.exports = router;
