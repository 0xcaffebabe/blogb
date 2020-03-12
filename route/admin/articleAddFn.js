const formidable = require('formidable');
const {article} = require('../../model/article');

const path = require('path');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads");
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        
        await article.create({
            title:fields.title,
            author:fields.author,
            publishDate:fields.publishDate,
            content:fields.content,
            cover:files.cover.path.split('public')[1]
        });
        res.redirect('/admin/article');
    });
    
}