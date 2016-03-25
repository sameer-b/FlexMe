var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var nls = require('./text/text.js').nls();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('home', {
        nls: nls
    });
});

app.get('/setup', function(req, res) {
    res.render('setup', {
        nls: nls
    });
});

app.get('/usage', function(req, res) {
    res.render('usage', {
        nls: nls
    });
});

app.get('/save', function(req, res) {
    res.render('save', {
        nls: nls
    });
});

app.post('/done', function(req, res) {
    res.render('done', {
        nls: nls,
        data : {
            fund: req.body.goal
        }
    });
});

app.listen(3000, function () {
    console.log(nls.title);
  console.log('Example app listening on port 3000!');
});
