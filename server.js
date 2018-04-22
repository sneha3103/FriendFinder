//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http");
// var fs = require("fs");

//Setting up the Express Path
var app = express();
var PORT = 8080;

//Setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





app.listen(PORT, function() {
    console.log("App listening on PORT  " + PORT);
});


