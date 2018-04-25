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
//Post is used to handle all the incoming survey results.
app.post("/api/friends", function(req, res) {

    var buddyMatch;
    var newPersonScore = req.body.scores;
    console.log(req.body);
    console.log(req.body.scores);
    var results = [];
    var resultIsMatched = 0;
   



    //comparison
    //respond with match - res.json object (similar to friends array) to send the match 
  });

}