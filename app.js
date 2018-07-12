const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const request = require("request");

app.get("/results", (req, res) => {
  res.send("hello");
});

request(
  "http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb",
  function(error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);

app.listen(port, () => {
  console.log("listening on port", port);
});
