const mongoose = require('mongoose');
const bcrypy = require('bcrypt');

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
module.exports = {
    user
}