
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

