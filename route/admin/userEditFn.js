const joi = require('joi');
const { user,validateUser } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res,next) => {
    
    try {
        await validateUser(req.body);
    } catch (e) {
        return next(JSON.stringify({path:'/admin/user-edit',message:e.message}));
    }
    let u = await user.findOne({email:req.body.email});
    
    if (u){
        return next(JSON.stringify({path:'/admin/user-edit',message:'邮箱地址被占用'}));
    }
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password,salt);
    req.body.password = password;

    user.create(req.body);
    res.redirect('/admin/user');
}