const gurad = (req,res,next)=>{
    if (req.url != '/login' && !req.session.user){
        res.redirect('/admin/login');
    }else{
        if (req.url == '/logout'){
            return next();
        }
        if (req.session.user &&req.session.user.role == 'normal'){
            return res.redirect('/home');
        }
        next();
    }
};

module.exports = gurad;