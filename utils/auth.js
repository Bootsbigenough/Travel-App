const withAuth = (req, res, next) => {
  // check if the user is logged in
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
