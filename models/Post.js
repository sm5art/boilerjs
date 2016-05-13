var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema( {
          author: String,
          post: String
      }),
Post = mongoose.model('post', postSchema);

module.exports = Post;
