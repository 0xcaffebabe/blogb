module.exports = (req,res,next)=>{
    res.render('admin/article-edit',{
        user:req.session.user
    })
}