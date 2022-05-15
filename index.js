var express = require('express');
 
var app = express();
var calc = 2;
app.get('/', function (req, res) {
 res.send('This is simple node app' + "</br>" + 'The result of 1+1 is: ' + calc);
 res.send('This is tht first CICD test');
});
app.listen(process.env.PORT || 3000);
 
module.exports = app;
