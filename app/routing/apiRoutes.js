//apiRoutes sending survey data back and forth
//route to send data and route to get data from server

var path = require("path");

//friends.js is data so we want to save to a variable
var friendsData = require("../data/friends.js")
// console.log(friendsData);

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
    
    //Capturing the user input object
    var userInput = req.body;
    console.log("User Input = " + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    console.log("user responses = " + userResponses);

    //To find your friend mate

    var matchImage = "";
    var matchName = "";
    var totalDiff = 1000;

    //Loop through the friendsData array and compare scores
    for (var i = 0; i < friendsData.length; i++) {
        var currentFriend = friendsData[i];
        //created a variable called diff to compute the differences for each question
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            var bestFriend = userResponses[j];
            //Math.abs takes care of the absolute value of the integer so each negative value will be positive
            diff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userResponses[j]));
        
        
        //If there the lowest difference, record the friends match 

        if(diff < totalDiff) {
            totalDiff = diff;
            bestFriend = currentFriend.photo;
            bestFriend = currentFriend.name;
        }
    }

    //Adds a new user
    friendsData.push[userInput];


    //comparison
    //respond with match - res.json object (similar to friends array) to send the match 
    res.json
  });

}