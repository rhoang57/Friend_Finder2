//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information such as: name, link to photo, and array or survery answers.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In the below case when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of all possible friend matches)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // The compatibility logic will go here.
    //Check to see if I can grab user input
    // console.log(req.body);
    //JSON objects that are on api/friends show up with below console log without adding user input into array of objects!
    //console.log(friendsData);
    //var closestFriendIndex is initially set to 0 so the first user to input would have at least one closest match, which would be "Slimer" by default
    //var smallestDifference is initially set to 40 since that is the maximum amount of difference possible and will be called later in the "if" statement to ensure that the new "smallestDifference" will change 
    var userData = req.body;
    var closestFriendIndex = 0;
    var smallestDifference = 40;

    for (i = 0; i < friendsData.length; i++) {
      var actualDifference = 0;
      for (x = 0; x < 10; x++) {
        var difference = Math.abs(userData.scores[x] - friendsData[i].scores[x]);
        actualDifference += difference;
      }

      if (actualDifference < smallestDifference) {
        closestFriendIndex = i;
        smallestDifference = actualDifference;
      }
    }

    /*console.log(userData.scores);
    console.log(friendsData[0].scores);
    console.log("closestFriendIndex: " + closestFriendIndex);
    console.log("Smallest Difference: " + smallestDifference);
    */

    friendsData.push(userData);
    res.json(friendsData[closestFriendIndex]);


  });


};