const gurad = (req,res,next)=>{
    if (req.url != '/login' && !req.session.user){
        res.redirect('/admin/login');
    }else{
        next();
    }
};

module.exports = gurad;