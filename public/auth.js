const withAuth = (req, res, mext) => {

if (!req.session.loggedIn) {
    res.redirect('/login');
} else {

    next();
}
};

module.exports = withAuth;