const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        maxlength:128,
        minlength:4,
        require:[true,'请填写文章标题']
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:[true,'文章作者为空']
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    cover:{
        type:String,
        default:null
    },
    content:{
        type:String
    }
});

const article = mongoose.model('Article',articleSchema);

module.exports = {
    article
}