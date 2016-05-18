var express = require('express');
path = require('path'),
app = express(),
port = 1234,
bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost/norum');

//passport
var passport = require('passport');
require('./config/passport')(passport);
var flash = require('connect-flash')
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
//flash middleware
app.use(flash())

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./routes/router')(app,passport);
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});
app.listen(port);
console.log("server running on port "+port)
