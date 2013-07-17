#!/usr/bin/env node
var fs = require('fs');
var index = fs.readFileSync('./index.html', 'utf8');
// var buffer = new Buffer(256);
// buffer.write(index);


var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
