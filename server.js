var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/', proxy('http://gs.apple.com'));

app.listen(process.env.PORT || 8000);
