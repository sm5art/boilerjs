var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema( {
          username: String,
          password: String
      }),
User = mongoose.model('user', userSchema);

module.exports = User;
