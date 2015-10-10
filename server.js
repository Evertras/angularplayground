var express = require('express');
var path = require('path');

var port = 4243;

var app = express();

app.use('/css', express.static(path.resolve(__dirname, 'public', 'css')));
app.use('/img', express.static(path.resolve(__dirname, 'public', 'img')));
app.use('/js', express.static(path.resolve(__dirname, 'public', 'js')));
app.use('/', express.static(path.resolve(__dirname, 'public', 'views')));
app.use('/libs', express.static(path.resolve(__dirname, 'public', 'libs')));

app.listen(port);
