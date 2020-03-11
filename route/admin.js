const express = require('express');
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));
admin.get('/user', require('./admin/userPage'));
admin.get('/logout',require('./admin/logout'));
admin.get('/user-edit',require('./admin/userEdit'));

admin.post('/login', require('./admin/login'));
admin.post('/user-add',require('./admin/userEditFn'))
admin.post('/user-edit',require('./admin/userModify'))
module.exports = admin;