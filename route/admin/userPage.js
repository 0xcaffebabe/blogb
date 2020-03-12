const { user } = require('../../model/user');

module.exports = async (req, res) => {
    let page = req.query.page;
    let pageSize = 2;
    let count = await user.countDocuments({});
    let totalPage = Math.ceil(count / pageSize);
    req.app.locals.current = 'user';
    const list = await user.find({}).limit(pageSize).skip((page - 1) * pageSize);
    res.render('admin/user', {
        user: req.session.user,
        list,
        page,
        total:totalPage
    });
}