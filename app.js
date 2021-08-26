const express = require("express");
const request = require("request");
const app = express();

//removing ejs extension
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', function(req, res) {
    console.log(query);

    var query = req.query.search;

    console.log(query);
    var url = "https://www.omdbapi.com/?apikey=253f736&s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // res.send(data["Search"][0]);
            // res.send(data);
            res.render("home", { data: data });

        }
    });
});

app.get("*", function(req, res) {
    res.render("404");
});
app.listen(5500, function() {
    console.log("Server started at port 5500");
});