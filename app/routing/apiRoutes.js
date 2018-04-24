//apiRoutes sending survey data back and forth
//route to send data and route to get data from server

var path = require("path");

//friends.js is data so we want to save to a variable
var friendsData = require("../data/friends.js")
console.log(friendsData);

module.exports = function(app) {
    console.log("Export worked");

//Collect data from survey and send data to server
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//send data to server
//save friends data in a variable
app.post("/api/friends", function(req, res) {
    req.body;
    //comparison
    //respond with match - res.json object (similar to friends array) to send the match 
  });

}