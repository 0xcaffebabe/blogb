const {article} = require('../../model/article');
const {comment} = require('../../model/comment');

module.exports = async (req,res)=>{
    const id = req.query.id;
    const a = await article.findById(id).populate('author');
    const comments = await comment.find({aid:id}).populate('uid');
    
    res.render('home/article',{
        article:a,
        user:req.session.user,
        comments
    });
}