module.exports = (req, res) => {
    console.log(req.session.username);
    res.render('admin/login');
}