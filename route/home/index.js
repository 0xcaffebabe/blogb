const {article} = require('../../model/article');
const pagination = require('mongoose-sex-page');
module.exports = async (req,res)=>{
    const page = req.query.page;
    const articles = await pagination(article).find().page(page).size(2).display(3).populate('author').exec();
    
    res.render('home/default',{articles});
}