const {user} = require('../../model/user');

module.exports = async (req,res,next)=>{
    await user.findByIdAndDelete(req.query.id);
    res.redirect('/admin/user');
}