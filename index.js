const express = require("express");
const ejs = require("ejs");

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

//modification for localhost use only
if (process.env.NODE_ENV != 'production') {
    console.log('Development mode');
    app.use('/public', express.static(__dirname + '/public'));
}

app.get('/', function(req, res) {
    res.render('home', {pageName: 'home'});
});

// app.get('/about', function(req, res) {
//     res.render('about', {pageName: 'about'});
// });

app.get('/contact', function(req, res) {
    res.render('contact', {pageName: 'contact'});
});

// app.get('/activities', function(req, res) {
//     res.render('activities', {pageName: 'activities'});
// });

// app.get('/privacy', function(req, res) {
//     res.render('privacy', {pageName: 'privacy'});
// });

app.use(function(req, res) {
    res.status(404).redirect('/');
}); 

app.listen(port, function() {
    console.log('Server started on port ' + port);
});     