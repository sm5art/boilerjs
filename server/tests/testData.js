var Post = require('../models/Post');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/norum');

Post.remove({},function(err){
  console.log(err ? err: console.log('removed'));
});

Post.create({author:"artiekashmoney",
post:'dont even try'});

Post.create({author:"artiekashmoney",
post:'no u'});
