var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [];

app.get("/api/friends", function(req, res){
    console.log();
    return res.json();
});

app.post("/api/friends", function(req,res){

    var posted = req.body;

    console.log(posted);

})