require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api')
var keys = require("./keys.js");
var moment = require('moment');
//moment().format(MM / DD / YYYY);

var spotify = new Spotify(keys.spotify);

var info = process.argv[2];
//////////////Bands in Town//////////////////////////////
switch (info) {
    // case "concert-this":
    //     //pulling artist/band name
    //     var parameter = process.argv.slice(3).join(" ");
    //     //setting bandsintown url
    //     var bandsInTownURL = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=1";
    //     axios
    //         .get(bandsInTownURL)
    //         .then(function (response) {
    //             console.log("Venue: " + response.data[0].venue.name);
    //             console.log("City: " + response.data[0].venue.city);
    //             console.log("Date: " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
    //         })
    //         .catch(function (error) {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //                 console.log(error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log("Error", error.message);
    //             }
    //             console.log(error.config);
    //         });
    //     break;
    //////////////////////////////Spotify///////////////////////////
    case "spotify-this-song":
        var parameter = process.argv.slice(3).join(" ");
        spotify
            .search({ type: 'track', query: parameter })
            .then(function (response) {
                // console.log(JSON.stringify(response, null, 2));
                console.log(response.tracks.items);
            })
            .catch(function (err) {
                console.log(err);
            });
        break;
    /////////////////////////OMDB////////////////////////////////////
    // case "movie-this":
    //     //pulling movie name
    //     var parameter = process.argv.slice(3).join(" ");
    //     //setting omdb url
    //     var omdbURL = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy";
    //     axios
    //         .get(omdbURL)
    //         .then(function (response) {
    //             console.log("Title: " + response.data.Title);
    //             console.log("Year: " + response.data.Year);
    //             console.log("Rated: " + response.data.Rated);
    //             console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    //             console.log("Country: " + response.data.Country);
    //             console.log("Language: " + response.data.Language);
    //             console.log("Plot: " + response.data.Plot);
    //             console.log("Actors: " + response.data.Actors);
    //         })
    //         .catch(function (error) {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //                 console.log(error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log("Error", error.message);
    //             }
    //             console.log(error.config);
    //         });
    //     break;

    case "do-what-it-says":

        break;
};