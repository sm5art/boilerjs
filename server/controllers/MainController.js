var Post = require('../models/Post');

module.exports.index = function(req,res){
	res.render('index.ejs')
}

module.exports.list = function(req,res){
	Post.find(function(err,posts){
		res.send(posts);
	});
}
