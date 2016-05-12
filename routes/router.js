var main = require("../controllers/MainController")
module.exports = function(app) {

app.get('/', main.index);
app.get('/signup')

}
