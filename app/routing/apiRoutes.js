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
    var bestFriendMatch;
    var match = 0;
    var results = [];

    //Loop through the friendsData array and compare scores
    for (var i = 0; i < friendsData.length; i++) {
        //created a variable called diff to compute the differences for each question
        var diff = 0;

        for (var j = 0; j < userResponses.length; j++) {
            //Math.abs takes care of the absolute value of the integer so each negative value will be positive
            diff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userResponses[j]));
        };
        //Pushes the difference to the results array
        results.push(diff);
    }
    //Loops through the results array and compares if the difference is less than or equal to the first result index. 
    for(var i =0; i<results.length; i++) {
        console.log(results[i]);
        
        //If the difference is less or equal, match gets reassigned and compared again until loop is complete
        if(results[i] <= results[match]) {
            match = i;
            console.log(match);
        }
    };

    //Assigned a new variable that has the new best friend match
    bestFriendMatch = friendsData[match];

    //Adds a new user
    friendsData.push[userInput];

    //comparison
    //respond with match - res.json object (similar to friends array) to send the match 
    res.json(bestFriendMatch);
  });

}