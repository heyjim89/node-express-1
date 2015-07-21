// Entry point
var express = require('express');


//calling express treturns an app object. calling methods on the app object configures our app

var app = express();

// app.set sets config settings (run once each on start of app)

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(9996, function() {
	console.log('Express server listening on port ' + server.address().port);
});
