const express = require('express');
const { user } = require('../model/user');
const bcrypy = require('bcrypt');
const admin = express.Router();
admin.get('/login', (req, res) => {
    console.log(req.session.username);
    res.render('admin/login');
})
admin.post('/login', async (req, res) => {
    let { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        res.status(400).render("admin/common/error", {
            msg: '邮件或密码为空'
        });
        return;
    }

    let u = await user.findOne({ email });
    if (u) {
        let isValid = await bcrypy.compare(password, u.password);
        if (isValid) {
            req.session.username = u.username;
            res.send('登录成功');
        } else {
            res.status(403).render("admin/common/error", {
                msg: '邮件或密码错误'
            });
        }
    } else {
        res.status(403).render("admin/common/error", {
            msg: '邮件或密码错误'
        });
    }

})
module.exports = admin;