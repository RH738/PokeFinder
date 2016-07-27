var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.use("/pictures",  express.static(__dirname + '/public/images'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Pokefinder just started!');
});
