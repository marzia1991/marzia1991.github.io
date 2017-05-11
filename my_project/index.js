var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mongojs = require('mongojs');
//var db = mongojs('facebook', ['schedules']);
var db = {};

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*db.schedules.insert({_token: accessToken},function(err, result){
	if (err) {
      console.log(err);
  	}
	callback(result);
});
*/

app.post('/api/schedules', function (req, res) {
  var token = req.body;
  console.log("cazzo"+token);
  db.schedules.insert(token, function (err, inserted) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(inserted);
  });
});

app.get('*', function (req, res) {
  res.sendFile('index.html', {root: './public'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});