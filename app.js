const express = require('express');
const home = require('./route/home');
const admin = require('./route/admin');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
require('./model/connect')
require('./model/user')
const app = express();

// 模板相关配置
// 位置
app.set('views', path.join(__dirname, 'views'));
// 模板引擎
app.set('view engine', 'art');
// 设置后缀对应的模板引擎
app.engine('art', require('express-art-template'));

// 静态资源处理
app.use(express.static(path.join(__dirname, 'public')));

// post参数处理
app.use(bodyParser.urlencoded({ extended: false }))

// session
app.use(session({secret:'keyyyy'}))

// 路由
app.use('/home', home);
app.use('/admin', admin);

app.listen(80);
console.log('服务器启动成功，http://localhost')
