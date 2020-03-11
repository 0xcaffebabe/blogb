const {user} = require('../../model/user');

module.exports = async (req,res)=>{
    let {message,id} = req.query;
    if (id){
        // 修改操作
        id = id.replace(/"/g,'');
        let edit = await user.findById(id);
        res.render('admin/user-edit',{
            user:req.session.user,
            message,
            edit,
            id,
            link:'/admin/user-edit?id='+id,
            button:'更新'
        });
    }else{
        // 添加操作
        res.render('admin/user-edit',{
            user:req.session.user,
            message,
            link:'/admin/user-add',
            button:'添加'
        });
    }
}