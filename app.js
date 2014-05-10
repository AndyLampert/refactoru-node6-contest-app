var express = require('express');
// including the bodyParser
var bodyParser = require('body-parser');
var app = express();
var VideoEntry = require('./vidClass');
var jquery = require('jquery');
var addMaxWarning = require('./public/main');
// including the bodyParser
app.use(bodyParser());

var videoList = [
	new VideoEntry({
		name: 'Rick Grimes vs. Walter White',
		url: '//www.youtube.com/embed/krQHQvtIr6w',
		videoTitle: 'Rick Grimes vs. Walter White',
		videoDesc: 'Zombies vs Methamphetamine'
	}),
	new VideoEntry({
		name: 'Mozart vs Skrillex',
		url: '//www.youtube.com/embed/_6Au0xCg3PI',
		videoTitle: 'Mozart vs Skrillex',
		videoDesc: 'Classical vs ????'
	}),
	new VideoEntry({
		name: 'Mozart vs Skrillex',
		url: '//www.youtube.com/embed/_6Au0xCg3PI',
		videoTitle: 'Mozart vs Skrillex',
		videoDesc: 'Classical vs ????'
	}),
	new VideoEntry({
		name: 'Mozart vs Skrillex',
		url: '//www.youtube.com/embed/_6Au0xCg3PI',
		videoTitle: 'Mozart vs Skrillex',
		videoDesc: 'Classical vs ????'
	}),
	new VideoEntry({
		name: 'Mozart vs Skrillex',
		url: '//www.youtube.com/embed/_6Au0xCg3PI',
		videoTitle: 'Mozart vs Skrillex',
		videoDesc: 'Classical vs ????'
	}),
	new VideoEntry({
		name: 'Mozart vs Skrillex',
		url: '//www.youtube.com/embed/_6Au0xCg3PI',
		videoTitle: 'Mozart vs Skrillex',
		videoDesc: 'Classical vs ????'
	}),
	new VideoEntry({
		name: 'Mozart vs Skrillex',
		url: '//www.youtube.com/embed/_6Au0xCg3PI',
		videoTitle: 'Mozart vs Skrillex',
		videoDesc: 'Classical vs ????'
	}),
];

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

// route handle for the form submission
app.post('/submit', function(req, res){
	var formData = req.body;
	videoList.push(new VideoEntry(formData));

	if(videoList.length > 8){
		console.log('too many');
		var appendError = true;
		videoList.pop();
	} else {
		appendError = false;
	}

	res.render('submit', {
		// the Jade variable: 
		// a: 10
		'masterList': videoList,
		'videoNumCheck': appendError
	});
	// req.body is the JS object that was created by the form
	// push new formData to the masterList
});

var server = app.listen(3304, function() {
	console.log('Express server listening on port ' + server.address().port);
});
