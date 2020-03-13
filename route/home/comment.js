const {comment} = require('../../model/comment');

module.exports = async (req,res)=>{
    const aid = req.body.aid;
    const content= req.body.content;
    const uid = req.session.user._id;
    await comment.create({aid,content,uid});
    res.redirect('/home/article?id='+aid);
}