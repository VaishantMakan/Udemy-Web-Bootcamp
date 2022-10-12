const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("Hello");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: vaishantmakan@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("<h1>About Me</h1><h5>Hi! My name is Vaishant Makan.</h5>");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Coffee</li><li>Coding</li><li>Driving</li></ul>");
});

app.listen(3004, function () {
  console.log("Server started on port 3004");
});
