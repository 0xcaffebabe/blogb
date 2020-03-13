const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(`mongodb://${config.get("db.username")}:${config.get("db.password")}@localhost/blogb`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据连接成功'))
    .catch(e => console.error('数据库连接失败', e))