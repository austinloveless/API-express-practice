const express = require("express");
const app = express();
const request = require("request");
const port = process.env.PORT || 3000;
const parse = require("body-parser");

app.set("view engine", "ejs");
app.use(parse.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  let search = req.query.search;
  request(`http://www.omdbapi.com/?s=${search}&apikey=thewdb`, function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
      const data = JSON.parse(body);
      res.render("results", { data: data });
    }
  });
});
app.listen(port, () => {
  console.log("listening on port", port);
});
