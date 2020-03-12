const { article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res, next) => {
    const page = req.query.page;
    req.app.locals.current = 'article';
    const articles = await pagination(article).find().page(page).size(2).display(3).populate('author').exec();

    res.render('admin/article', {
        user: req.session.user,
        articles
    })
}