var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://pcd:pcd@ds011439.mlab.com:11439/pcd');

exports.login = function(req, res) {
    var collection = db.get('users');

    if(! req.body.email && req.body.password) {
        res.redirect('/login');
        return;
    }

    collection.find({
        "email" : req.body.email,
        "password" : req.body.password
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        } else {
            // And forward to success page
            authenticate(req, res, doc);
        }
    });
}

exports.add = function(req, res) {
    var collection = db.get('users');
    if (! req.body.email && req.body.password && req.body.confirmPassword) {
        res.redirect('/login');
        return;
    }

    if (req.body.password !== req.body.confirmPassword) {
        res.redirect('/login');
        return;
    }

    collection.find({
        'email': req.body.email
    }, function(err, doc) {
        if(err) {
            res.redirect('/login');
        } else if (doc.length === 0) {
            collection.insert({
                'email': req.body.email,
                'password': req.body.password
            }, function(err, doc) {
                res.redirect('/login');
            });
        } else {
            res.redirect('/login');
        }
    });
}

var authenticate = function(req, res, doc) {
    if(doc.length > 1) {
        res.redirect('/login');
        return;
    }

    if(doc[0].email === req.body.email && doc[0].password === req.body.password) {
        res.cookie('email', doc[0].email);
        res.redirect('/files');
    } else {
        res.redirect('/login');
    }
}
