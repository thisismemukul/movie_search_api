const express = require("express");
const request = require("request");
const app = express();

//removing ejs extension
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', function(req, res) {
    var query = req.query.search;
    if (typeof query !== "undefined") {
        var query = req.query.search;
    } else {
        var arr = ["Harry", "Avengers", "Pirates", "X-Men", "Captain", "Shershaah", "Dhoom", "Dabangg", "Hera Pheri"];
        var query = arr[Math.floor(Math.random() * arr.length)];
    }
    var url = "https://www.omdbapi.com/?apikey=253f736&s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // res.send(data["Search"][0]);
            //  res.send(data["Response"]);
            // console.log(data["Response"]);
            res.render("home", { data: data, query: query });
        }
    });
});

app.get('/id', function(req, res) {
    var query = req.query.imdbid;
    if (typeof query !== "undefined") {
        var query = req.query.imdbid;
    } else {
        var arr = ["tt0076759", "tt0076759", "tt0076759", "X-Men", "tt0076759", "Shershaah", "Dhoom", "Dabangg", "Hera Pheri"];
        var query = arr[Math.floor(Math.random() * arr.length)];
    }

    var url = "https://www.omdbapi.com/?apikey=253f736&i=" + query + "&plot=full";
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // res.send(data["Search"][0]);
            //  res.send(data["Response"]);
            // console.log(data["Response"]);
            res.render("info", { data: data, query: query });
        }
    });
});

app.get("*", function(req, res) {
    res.render("404");
});
// app.listen(5500, function() {
//     console.log("Server started at port 5500");
// });
const port = process.env.PORT || '5500';
app.listen(port, () => console.log(`server on ${port}`));