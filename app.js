const express = require("express");
const request = require("request");
const app = express();

//removing ejs extension
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("home");
});





app.get('/results', function(req, res) {
    request("https://www.omdbapi.com/?apikey=253f736&s=star", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // res.send(data["Search"][0]);
            res.render("result");

        }
    });
});

app.get("*", function(req, res) {
    res.render("404");
});
app.listen(5500, function() {
    console.log("Server started at port 5500");
});