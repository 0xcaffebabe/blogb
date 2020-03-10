const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据连接成功'))
    .catch(e => console.error('数据库连接失败', e))