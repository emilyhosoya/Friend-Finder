// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

const friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    newUser = req.body;
    console.log(newUser);
    // res.json(newUser);

    const checkMatch = newUser => {
      console.log("check match for: ", newUser);
      friendsData.forEach(friend => {
        let scoresToCompare = friend.scores;
        let totalDifference = 0;

        scoresToCompare.forEach(score => {
          let difference = Math.abs(currentUser.scores[score] - score);
          console.log(difference);
          totalDifference += difference;
        });

        console.log(totalDifference);
      });
    };

    checkMatch(newUser);
  });
};

// console.log(friendsData);

// checkCompatability(friendsData[0]);
