//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http");
// var fs = require("fs");

//Setting up the Express Path
var app = express();
var PORT = 8080;

module.exports = function(app) {
    console.log("Export worked");
}

// A GET Route to "/survey" which should display the survey page

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

// A default, catch-all route that leads to `home.html` which displays the home page. 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT  " + PORT);
});