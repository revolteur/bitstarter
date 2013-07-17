#!/usr/bin/env node
var fs = require('fs');
var buf = new Buffer(256);
var infile = "index.html";
fs.readFile(infile);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("Hello Wrold 2!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
