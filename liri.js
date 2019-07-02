require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);

var info = process.argv[2];

switch (info) {
    case "concert-this":
        //pulling artist/band name
        var parameter = process.argv.slice(3).join(" ");
        //setting bandsintown url
        var bandsInTownURL = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=1";
        axios
            .get(bandsInTownURL)
            .then(function (response) {
                console.log(response.data)
            });


        break;

    case "spotify-this-song":

        break;

    case "movie-this":

        break;

    case "do-what-it-says":

        break;
};