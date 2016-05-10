var mongojs = require('mongojs');
var db = mongojs('facebook', ['schedules']);


db.schedules.insert({_token: accessToken},function(err, result){
	if (err) {
      console.log(err);
  	}
	callback(result);
});
