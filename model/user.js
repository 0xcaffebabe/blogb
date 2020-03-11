const mongoose = require('mongoose');
const bcrypy = require('bcrypt');
const joi = require('joi');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 16
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        default: 0 // 0为启用状态，1为禁用状态
    }
});

const user = mongoose.model('User', userSchema);

// 创建管理员账户
async function createAdmin() {
    const salt = await bcrypy.genSalt(10);
    const result = await bcrypy.hash('123', salt);
    try{
        const u = await user.create({
            username: 'admin',
            email: 'admin@ismy.wang',
            password: result,
            role: 'admin',
            state: 0
        });
        if (u){
            console.log('增加admin成功');
        }else{
            console.error('增加admin失败');
        }
    }catch(e){
        console.error('增加admin失败',e.message);
    }
}
createAdmin();

const validateUser = (user)=>{
    const schema = {
        username: joi.string().min(2).max(16).required().error(new Error('用户名不符合要求')),
        email: joi.string().email().error(new Error('邮箱不符合要求')),
        password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合要求')),
        role: joi.string().valid('normal', 'admin').required().error(new Error('角色属性不合法')),
        state: joi.number().valid(0, 1).required().error(new Error('状态属性不合法'))
    };
    return joi.validate(user, schema);
}

module.exports = {
    user,validateUser
}