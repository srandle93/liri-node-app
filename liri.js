let request = require("request");
let fs = require('fs');
let qs = require('querystring');
let spotify = require("node-spotify-api");
require("dotenv").config();
let keys = require('./keys');
let apiKey = "trilogy";
let title = process.argv[2];

request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=" + apiKey, function(error, response, body) {
  if (JSON.parse(body).Title !== undefined) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).rottenTomatoesRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  } else { 
    console.log("Title: " + "Mr. Nobody");
  }
});
