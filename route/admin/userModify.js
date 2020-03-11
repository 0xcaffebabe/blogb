const { user } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    const body = req.body;
    const {username,email,role,state} = body;
    const id = req.query.id.replace(/"/g, "");
    let u = await user.findById(id);
    if (await bcrypt.compare(body.password, u.password)) {
        await user.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        res.redirect('/admin/user');
    } else {
        let obj = { path: '/admin/user-edit', message: "密码比对失败" };
        next(JSON.stringify(obj));
    }
}